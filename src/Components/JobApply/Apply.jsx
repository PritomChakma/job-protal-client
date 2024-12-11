import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

const Apply = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  console.log(id, user);

  const submitJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const linkdin = form.linkdin.value;
    const github = form.github.value;
    const resume = form.resume.value;


    const canditate = { name, linkdin, github, resume };

    const JobAplication = {
      job_id: id,
      applicant_email: user.email,
      linkdin,
      github,
      resume,
      name,
    };

    fetch("http://localhost:5000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(JobAplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            
        }
  });
  };

  return (
    <div className="bg-[#F4F3F0] md:p-24">
      <h2 className="text-3xl font-bold text-center my-5">Apply The job</h2>
      <p className="text-center md:w-10/12 mx-auto mb-10">
        "Fill out this form to apply for your desired position. Provide your
        personal details, educational background, professional experience, and
        any relevant documents. Ensure all information is accurate and complete
        to strengthen your application."
      </p>

      <form onSubmit={submitJobApply}>
        {/*name and quantity form row */}
        <div className="md:flex gap-8 px-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Coffee Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div class="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Linkdin</span>
            </label>
            <input
              type="url"
              name="linkdin"
              placeholder="Linkdin Url"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/*category and details form row */}
        <div className="md:flex gap-8 px-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Github</span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="Github Url"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div class="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Profile Resume</span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Resume Url"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <input
          type="submit"
          value="Apply"
          className="btn btn-block bg-blue-500 my-7 px-2 text-white"
        />
      </form>
    </div>
  );
};

export default Apply;
