import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import AuthContext from "../../Context/AuthContext";

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/job-application/${_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = jobs.filter((job) => job._id !== _id);
              setJobs(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      {jobs.map((job) => (
        <div className="overflow-x-auto w-11/12 mx-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Company Name</th>
                <th>Job Type</th>
                <th>Update / Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>{job.title}</td>
                <td>{job.jobType}</td>
                <th>
                  <div className="flex ">
                    {/* <Link to={`/updateReview/${_id}`}>
                    <div>
                      <button className="btn bg-gray-800 text-white">
                        Update
                      </button>
                    </div>
                  </Link> */}
                    <div>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="btn join-item bg-[#EA4744] text-white"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MyApplications;
