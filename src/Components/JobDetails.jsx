import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  return (
    <div className="flex justify-center">
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2 p-5">
            <img
              src={job.company_logo}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              {/* <span>6 min ago</span> */}
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-lg  dark:text-violet-600">
                <span className="font-semibold mr-2">Job Title:</span>
                {job.title}
              </h3>
            </a>
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-lg  dark:text-violet-600">
                <span className="font-semibold mr-2">Company Name:</span>
                {job.company}
              </h3>
            </a>
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-lg  dark:text-violet-600">
                <span className="font-semibold mr-2">Job Type:</span>
                {job.jobType}
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">{job.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
