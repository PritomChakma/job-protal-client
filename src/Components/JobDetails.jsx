import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row">
      <img
        src={job.company_logo}
        className="max-w-sm rounded-lg  md:w-1/2" />
      <div className="md:w-1/2">
        <h1 className="text-xl "><span className="font-semibold mr-2">Title:</span>{job.title}</h1>
        <p className="text-xl"><span className="font-semibold mr-2">Company:</span>{job.company}</p>
        <p className="text-xl"><span className="font-semibold mr-2">Application Last Date:</span>{job.applicationDeadline}</p>
        <p className="text-xl"><span className="font-semibold mr-2">Hr Name:</span>{job.hr_name}</p>
        <p className="text-xl"><span className="font-semibold mr-2">Hr Email:</span>{job.hr_email}</p>
        <p className="py-6">
          {job.description}
        </p>
      

        <div className="flex flex-wrap gap-2">
            {job.requirements.map((skill, index) => (
              <p key={index} className="border-2 rounded-xl px-3 text-center bg-gray-200 hover:text-blue-500 p-1 hover:font-bold">
                {skill}
              </p>
            ))}
          </div>
          <p>
              <span className="font-semibold py-2">Salary:</span> {job.salaryRange.min}-
              {job.salaryRange.max} {job.salaryRange.currency}
            </p>
        <button className="btn btn-primary mt-3">Apply Now</button>
      </div>
    </div>
  </div>
  );
};

export default JobDetails;
