import React, { use } from 'react'
import { Link } from 'react-router';

export default function JobList({jobsCreatedByPromise}) {
  const jobs = use(jobsCreatedByPromise)
  console.log(jobs);
  return (
    <div>
      <h2>Jobs created by you : {jobs.length}</h2>

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>title</th>
        <th>Company</th>
        <th>Location</th>
        <th>View application</th>
      </tr>
    </thead>
    <tbody>
      {/* rows*/}
      {
        jobs.map((job, index)=> <tr key={index}>
        <th>{index + 1}</th>
        <td>{job.title}</td>
        <td>{job.company}</td>
        <td>{job.location}</td>
        <td> <Link to={`/applications/${job._id}`}>View Applications</Link> </td>
      </tr>)
      }
    </tbody>
  </table>
</div>
    </div>
  )
}
