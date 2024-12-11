import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    title,
    _id,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="flex gap-3 p-4 items-center">
          <figure>
            <img className="w-16" src={company_logo} alt="Shoes" />
          </figure>

          <div>
            <h2 className="text-xl font-bold">{jobType}</h2>
            <p className="flex items-center ">
              <FaLocationDot /> {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="flex flex-wrap gap-2">
            {requirements.map((skill) => (
              <p className="border-2 rounded-xl text-center bg-gray-200 hover:text-blue-500 p-1 hover:font-bold">
                {skill}
              </p>
            ))}
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end items-center">
            <p>
              <span className="font-semibold">Salary:</span> {salaryRange.min}-
              {salaryRange.max} {salaryRange.currency}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
