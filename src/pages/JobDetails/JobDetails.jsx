import React from 'react'
import { Link, useLoaderData } from 'react-router'

export default function JobDetails() {

  const {_id, title, company} = useLoaderData();
  return (
    <div>
      <h2 className='text-2xl'>Job details of : {title}</h2>
      <p>Company: {company}</p>
      <Link to={`/jobApply/${_id}`}><button className='btn btn-primary'>Apply now</button></Link>
      
    </div>
  )
}
