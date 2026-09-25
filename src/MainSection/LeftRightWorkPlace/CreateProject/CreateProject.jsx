const CreateProject = () => {
  return (
    <>
      <aside className="lg:col-span-4 w-full lg:sticky lg:top-20">
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-xl">
          {/* Form Header */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <h3
                  id="formTitle"
                  className="text-sm sm:text-base font-bold text-white uppercase tracking-tight"
                >
                  Create Project
                </h3>
              </div>
              <p id="formSubtitle" className="text-xs text-zinc-400 mt-0.5">
                Enter details to add a new project
              </p>
            </div>

            <span
              id="formModeBadge"
              className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
            >
              New Entry
            </span>
          </div>

          {/*  Form Fields  */}
          <form
            id="projectForm"
            onsubmit="handleFormSubmit(event)"
            className="space-y-3.5 sm:space-y-4"
          >
            <input type="hidden" id="editProjectId" value="" />

            {/* 1. Project Name */}
            <div>
              <label
                for="projectName"
                className="block text-xs font-medium text-zinc-300 mb-1"
              >
                Project Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                placeholder="e.g. NextGen SaaS Dashboard"
                className="w-full px-3 py-2 sm:py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400/20 transition-all"
                required
              />
              <p
                id="errorProjectName"
                className="hidden text-[11px] text-rose-400 mt-1 flex items-center gap-1"
              >
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Project name is required.</span>
              </p>
            </div>

            {/* 2. Client Name */}
            <div>
              <label
                for="clientName"
                className="block text-xs font-medium text-zinc-300 mb-1"
              >
                Client Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                id="clientName"
                placeholder="e.g. Acme Global Tech"
                className="w-full px-3 py-2 sm:py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400/20 transition-all"
                required
              />
              <p
                id="errorClientName"
                className="hidden text-[11px] text-rose-400 mt-1 flex items-center gap-1"
              >
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Client name is required.</span>
              </p>
            </div>

            {/*  3. Project URL */}
            <div>
              <label
                for="projectUrl"
                className="block text-xs font-medium text-zinc-300 mb-1"
              >
                Project URL <span className="text-rose-400">*</span>
              </label>
              <input
                type="url"
                id="projectUrl"
                placeholder="https://client-project.com"
                className="w-full px-3 py-2 sm:py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400/20 transition-all font-mono-code"
                required
              />
              <p
                id="errorProjectUrl"
                className="hidden text-[11px] text-rose-400 mt-1 flex items-center gap-1"
              >
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Please enter a valid URL.</span>
              </p>
            </div>

            {/*  4. Category  */}
            <div>
              <label
                for="category"
                className="block text-xs font-medium text-zinc-300 mb-1"
              >
                Category <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <select
                  id="category"
                  className="w-full px-3 py-2 sm:py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400/20 transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled selected>
                    Select category...
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Cloud / DevOps">Cloud / DevOps</option>
                  <option value="AI & ML">AI & Machine Learning</option>
                  <option value="Branding & Growth">Branding & Growth</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
              <p
                id="errorCategory"
                className="hidden text-[11px] text-rose-400 mt-1 flex items-center gap-1"
              >
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Please select a category.</span>
              </p>
            </div>

            {/* 5. Budget */}
            <div>
              <label
                for="budget"
                className="block text-xs font-medium text-zinc-300 mb-1"
              >
                Unit Budget ($ USD) <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500 font-mono-code text-xs">
                  $
                </span>
                <input
                  type="number"
                  id="budget"
                  step="any"
                  placeholder="5000"
                  className="w-full pl-7 pr-3 py-2 sm:py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400/20 transition-all font-mono-code"
                  required
                />
              </div>
              <p
                id="errorBudget"
                className="hidden text-[11px] text-rose-400 mt-1 flex items-center gap-1"
              >
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Budget must be a positive number.</span>
              </p>
            </div>

            {/* Buttons */}
            <div className="pt-3 flex items-center gap-2.5">
              <button
                type="submit"
                id="submitBtn"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:py-2.5 text-xs font-semibold rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 shadow-sm active:scale-98 transition-all cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
                <span id="submitBtnText">Add Project</span>
              </button>

              <button
                type="button"
                onclick="clearForm()"
                id="clearBtn"
                className="px-3.5 py-2 sm:py-2.5 text-xs font-medium rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                Clear
              </button>
            </div>

            {/* Cancel Edit Mode Button  */}
            <button
              type="button"
              id="cancelEditBtn"
              onclick="cancelEditMode()"
              className="hidden w-full text-center text-xs text-zinc-400 hover:text-zinc-200 py-1 transition-colors"
            >
              Cancel Edit Mode
            </button>
          </form>
        </div>
      </aside>
    </>
  );
};

export default CreateProject;
