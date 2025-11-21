import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

export default function JobApply() {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);

  const handleApplyFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const githublink  = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin, githublink, resume);

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      githublink,
      resume
    }
    axios.post('http://localhost:5000/applications', application)
    .then( res => {
      console.log(res.data)
      if(res.data.insertedId) {  
Swal.fire({
  title: "your application has been submitted",
  icon: "success",
  draggable: true
});
      }
    })
    .catch(error => {
      console.log(error);
    })

  }
  return (
    <div>
      <h2>Apply for this job <Link to={`/jobs/${jobId}`}>Details</Link> </h2>

      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link</label>
          <input type="url" name="linkedin" className="input" placeholder="Linkedin profile link" />

          <label className="label">Github Link</label>
          <input type="url" name="github" className="input" placeholder="Github link" />

          <label className="label">Resume</label>
          <input type="url" className="input" placeholder="Resume link" />
          <input type="submit" name="resume" className="btn" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
}
