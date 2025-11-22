import React from "react";

export default function JobApplications({application, index}) {
  const {applicant,  title} = application;
  return (
    <tr>
      <th>
        <label>
          {index + 1}
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
             
            </div>
          </div>
          <div>
            <div className="font-bold"> </div>
            <div className="text-sm opacity-50">{title}</div>
          </div>
        </div>
      </td>
      <td>
        <h3>{applicant}</h3>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
}
