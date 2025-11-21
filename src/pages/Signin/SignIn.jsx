import React, { use } from 'react'
import { AuthContext } from '../../context/Authcontext/AuthContext';
import signInLottie from '../../assets/lotties/signin.json'
import Lottie from 'lottie-react';

export default function SignIn() {


   const { signInUser } = use(AuthContext);
  
    const handleSignIn = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
  
     // create user
      signInUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          console.log(error);
        });
    };


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <Lottie
            style={{ width: "300px" }}
            loop={true}
            animationData={signInLottie}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign in now!</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>
            <div className="block">
                <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
