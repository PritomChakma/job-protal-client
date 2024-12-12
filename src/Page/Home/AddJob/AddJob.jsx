const AddJob = () => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center my-5 ">
        Add Job
      </h2>
      <p className="text-center text-sm md:text-base lg:text-lg md:w-8/12 lg:w-7/12 mx-auto mb-10 ">
        Are you looking for a description to include in a job form (e.g.,
        placeholder text, labels, or an overview of what the form does)? Or do
        you want help with designing a new "Add Job" form for your front-end
        project? Let me know so I can tailor the response to your needs!
      </p>

      <form
        // onSubmit={handleAddReview}
        className="w-full max-w-screen-lg mx-auto space-y-6"
      >
        {/* job title and company Logo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Title</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Game Title"
              className="border-2  w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Company Logo</span>
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Enter photo URL"
              className="border-2  w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        {/* Job category and job location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col w-full">
            <label>
              <span className="label-text font-semibold">
                <option value="action">Job Category:</option>
              </span>
            </label>
            <select
              name="genres"
              className="border-2 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="engineer">Engineer</option>
              <option value="marketing">Marketing</option>
              <option value="finance">Finance</option>
            </select>
          </div>

          <div className="form-control">
            <label>
              <span className="label-text font-semibold">Job Location:</span>
            </label>
            <input
              type="text"
              id="location"
              name="locatio"
              className="border-2 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              min="2000"
              placeholder="Enter Job Location"
              required
            />
          </div>
        </div>

        {/* hr_name and hr_email */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Hr Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="Enter your Hr Name"
              className="border-2  w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Hr Email</span>
            </label>
            <input
              type="email"
              name="hr_email"
              placeholder="Enter Hr Email"
              className="border-2  w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        {/* company name and job types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label>
              <span className="label-text font-semibold">Company Name:</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="border-2 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              min="2000"
              placeholder="Enter Company Name"
              required
            />
          </div>
          <div class="flex flex-col w-full">
            <label>
              <span className="label-text font-semibold">
                <option value="action">JobType:</option>
              </span>
            </label>
            <select
              name="genres"
              className="border-2  p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="fullTime">Full-Time</option>
              <option value="partTime">Part-Time</option>
              <option value="intern">Intern</option>
            </select>
          </div>
        </div>

        {/* salary range */}
        <label className="label">
          <span className="label-text font-semibold">SalaryRange:</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="form-control">
            <input
              type="number"
              name="min"
              placeholder="Min Salary"
              className="border-2  w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              name="max"
              placeholder="Max Salary"
              className="border-2  w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="currency"
              placeholder="Currency"
              className="border-2  w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        {/* Job Responsibility */}
        <div className="form-control">
          <label>
            <span className="label-text font-semibold">
              Job Responsibility:
            </span>
          </label>
          <input
            type="text"
            id="responsibilities"
            name="responsibilities"
            className="border-2 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            min="2000"
            placeholder="Responsibilities"
            required
          />
        </div>

        {/* job description */}
        <div className="form-control">
          <label htmlFor="description">
            <span className="label-text font-semibold">Job Description:</span>
          </label>
          <textarea
            id="description"
            name="description"
            className="border-2 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Write your Job Descriptio here..."
            rows="5"
            required
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn  bg-[#D12F42] hover:bg-gray-900 text-white w-full  px-6 py-3 rounded-lg my-4"
        />
      </form>
    </div>
  );
};

export default AddJob;
