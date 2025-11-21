import JobCard from "../Shared/JobCArd";

export default function HotJobs({ jobs }) {
  return (
    <div>
      <h2 className="text-4xl">Hot Jobs of the Day</h2>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        {
          jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
        }
      </div>
    </div>
  )
}
