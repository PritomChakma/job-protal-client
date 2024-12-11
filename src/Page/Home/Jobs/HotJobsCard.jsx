const HotJobsCard = ({ job }) => {
  const {
    title,
    locatio,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirement,
    company_logo,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 h-80 shadow-xl">
        <figure>
          <img
            src={company_logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
