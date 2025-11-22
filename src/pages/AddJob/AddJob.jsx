import React from "react";
import useAuth from "../../hooks/useAuth";
import axios, { Axios } from "axios";
import Swal from "sweetalert2";

export default function AddJob() {
  const {user} = useAuth();

  const handleAddJob = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries())
    // Process slaryrange data
    const {min, max, currency, ...newJob} = data;
    newJob.salaryRange = {min, max, currency};

    //Process requirements
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(',')
    const requirementsclean = requirementsDirty.map(req => req.trim());
    newJob.requirements = requirementsclean;


    //responisibilities
    newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());

    newJob.status ="active"
    console.log(newJob);
    //save job to the database
    axios.post('http://localhost:5000/jobs', newJob)
    .then(res => {
      if(res.data.insertedId) {
        Swal.fire({
  title: "Job added successfully",
  icon: "success",
  draggable: true
});
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div>
      <h2>Add a job</h2>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Title</label>
          <input type="text" className="input" name="title" placeholder="Job title" />

          <label className="label">Company</label>
          <input type="text" className="input" name="company" placeholder="Company name" />

          <label className="label">Location</label>
          <input type="text" className="input" name="location" placeholder="Company location" />

          <label className="label">Company logo</label>
          <input type="url" className="input" name="logo" placeholder="Company logo url" />
        </fieldset>

        {/* job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType" value="On-site"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType" value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType" value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>
        {/* job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job category</legend>
          <select
            defaultValue="Job Category"
            className="select"
            name="category"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline </legend>

          <input type="datetime-local" className="input" name="deadline"/>
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 ls:grid-cols-3 gap-4">
           <div>
             <label className="label">Minimum Salary</label>
            <input
              type="text"
              className="input"
              name="min"
              placeholder="Minimum Salary"
            />
           </div>

           <div>
             <label className="label">Maximum Salary</label>
            <input
              type="text"
              className="input"
              name="max"
              placeholder="Maximum Salary"
            />
           </div>

            <div>
              <label className="label">Currency</label>
            <select
              defaultValue="Select a Currency"
              className="select"
              name="currency"
            >
              <option disabled={true}>Select a Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EU</option>
            </select>
            </div>
          </div>
        </fieldset>
        {/* Job description  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job description</legend>
          <textarea className="textarea" name="description" placeholder="Job description"></textarea>
        </fieldset>
        {/* Job Requirements  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea className="textarea" name="requirements" placeholder="Requirements (seperate by comma)"></textarea>
        </fieldset>
        {/* Job Responsibilities  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities </legend>
          <textarea className="textarea" name="responsibilities" placeholder="Responsibilities (seperate by comma)"></textarea>
        </fieldset>
        {/* HR related info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR related info</legend>

          <label className="label">HR name</label>
          <input type="text" className="input" name="hr_name" placeholder="HR Name" />

          <label className="label">HR Email</label>
          <input type="email" className="input" name="hr_email" defaultValue={user.email} placeholder="HR Email" />

          <input type="submit" className="btn" value="Add Job" />
        </fieldset>
      </form>
    </div>
  );
}
