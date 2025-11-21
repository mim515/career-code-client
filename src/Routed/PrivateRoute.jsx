import React, { use } from 'react'
import { AuthContext } from '../context/Authcontext/AuthContext'
import { Navigate, useLocation } from 'react-router';

export default function PrivateRoute({children}) {
  const {user, loading} = use(AuthContext);
  const location = useLocation();
  if(loading){
    return <span className="loading loading-spinner text-warning"></span>
  }

  if(!user) {
   return <Navigate to="/signIn" state={location.pathname}></Navigate>
  }
  return children;
}
