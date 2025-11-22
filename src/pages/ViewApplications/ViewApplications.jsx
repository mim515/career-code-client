import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

export default function ViewApplications() {
  const { job_id } = useParams();
  const applications = useLoaderData();
  console.log(applications);


  const handleStatusChange = (e, app_id) => {
    console.log(app_id);
    axios.patch(`http://localhost:5000/applications/${app_id}`, {status: e.target.value})
  
    .then(res => {
      console.log(res.data)
      if(res.json.modifiedCount) {
        Swal.fire({
                    title: "your application has been submitted",
                    icon: "success",
                    draggable: true,
                  });
      }
    })
    .catch(error => console.log(error))
  }
  return (
    <div>
      <h2>
        {" "}
        {applications.length} Applications for: {job_id}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Applicant</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, index) => (
              <tr key={index}>
                <th>{index + 1} </th>
                <td> {application.applicant} </td>
                <td>Quality Control Specialist</td>
                <td>
                  <select onChange={e => handleStatusChange (e, application._id) } defaultValue={application.status} className="select">
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Call for interview</option>
                    <option>Hired</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


