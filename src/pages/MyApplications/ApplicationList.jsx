import React, { use } from "react";
import JobApplications from "./JobApplications";

export default function ApplicationList({ MyApplicationPromise }) {
  const applications = use(MyApplicationPromise);
  return (
    <div>
      <h3>jobs applied so far: {applications.length}</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            applications.map((application, index) => <JobApplications
            key={application._id}
            application={application} index={index}
            ></JobApplications>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
}
