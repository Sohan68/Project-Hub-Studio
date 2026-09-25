const ProjectCards = () => {
  return (
    <>
      <div id="projectsGrid" class="space-y-3.5 sm:space-y-4">
        {/* PROJECT CARD 1  */}
        <article class="project-card bg-[#121215] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-4 sm:p-5 transition-all relative group shadow-sm">
          {/* Top Card Row: Category Badge + Favorite + Actions  */}
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span class="px-2 py-0.5 text-[11px] font-medium rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Web Development
              </span>
              <span class="status-indicator px-2 py-0.5 text-[11px] font-medium rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Completed</span>
              </span>
            </div>

            <div class="flex items-center gap-1">
              {/* Star Favorite Button  */}
              <button
                onclick="toggleFavorite(1)"
                class="favorite-btn p-1.5 rounded-lg text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Favorite"
              >
                <svg
                  class="w-4 h-4 fill-amber-400"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              </button>

              {/* Edit Button  */}
              <button
                onclick="editProject(1)"
                class="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Edit"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </button>

              {/* Delete Button  */}
              <button
                onclick="deleteProject(1)"
                class="p-1.5 rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Delete"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Middle Card Row: Project Title & Client & URL  */}
          <div class="space-y-1 mb-3.5">
            <h4 class="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
              E-Commerce Platform Redesign
            </h4>
            <div class="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-zinc-400">
              <span class="inline-flex items-center gap-1 text-zinc-300">
                Client:
                <strong class="text-zinc-200 font-semibold">
                  Apex Retailers Ltd
                </strong>
              </span>
              <span class="text-zinc-700 hidden sm:inline">•</span>
              <a
                href="https://apexretail.shop"
                target="_blank"
                class="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 hover:underline font-mono-code"
              >
                <span>apexretail.shop</span>
                <svg
                  class="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Card Row  */}
          <div class="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
            {/* Quantity Controller  */}
            <div class="flex items-center gap-1.5 bg-zinc-950 px-2 py-1 rounded-xl border border-zinc-800">
              <span class="text-[11px] text-zinc-400">Qty:</span>
              <div class="flex items-center gap-1">
                <button
                  onclick="changeQuantity(1, -1)"
                  class="w-5 h-5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all active:scale-90 cursor-pointer"
                >
                  -
                </button>
                <span class="qty-display text-xs font-mono-code font-bold text-white px-1.5">
                  3
                </span>
                <button
                  onclick="changeQuantity(1, 1)"
                  class="w-5 h-5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all active:scale-90 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/*  Budget Calculations  */}
            <div class="text-right">
              <div class="text-[10px] text-zinc-500 font-mono-code">
                Unit: $12,500 × 3
              </div>
              <div class="text-xs sm:text-sm font-bold text-emerald-400 font-mono-code total-card-budget">
                $37,500.00
              </div>
            </div>

            {/* Status Toggle Action Switch  */}
            <button
              onclick="toggleStatus(1)"
              class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="Toggle status"
            >
              <span>Mark Pending</span>
              <svg
                class="w-3.5 h-3.5 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
            </button>
          </div>
        </article>

        {/* PROJECT CARD 2 */}
        <article class="project-card bg-[#121215] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-4 sm:p-5 transition-all relative group shadow-sm">
          {/* Top Card Row  */}
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span class="px-2 py-0.5 text-[11px] font-medium rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20">
                AI & ML
              </span>
              <span class="status-indicator px-2 py-0.5 text-[11px] font-medium rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 inline-flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Pending</span>
              </span>
            </div>

            <div class="flex items-center gap-1">
              <button
                onclick="toggleFavorite(2)"
                class="favorite-btn p-1.5 rounded-lg text-zinc-500 hover:text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Favorite"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              </button>

              <button
                onclick="editProject(2)"
                class="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Edit"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </button>

              <button
                onclick="deleteProject(2)"
                class="p-1.5 rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Delete"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Middle Card Row  */}
          <div class="space-y-1 mb-3.5">
            <h4 class="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
              AI Workflow Automation Bot
            </h4>
            <div class="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-zinc-400">
              <span class="inline-flex items-center gap-1 text-zinc-300">
                Client:
                <strong class="text-zinc-200 font-semibold">
                  NovaGen AI Labs
                </strong>
              </span>
              <span class="text-zinc-700 hidden sm:inline">•</span>
              <a
                href="https://novagen-flow.io"
                target="_blank"
                class="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 hover:underline font-mono-code"
              >
                <span>novagen-flow.io</span>
                <svg
                  class="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          Bottom Card Row
          <div class="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
            <div class="flex items-center gap-1.5 bg-zinc-950 px-2 py-1 rounded-xl border border-zinc-800">
              <span class="text-[11px] text-zinc-400">Qty:</span>
              <div class="flex items-center gap-1">
                <button
                  onclick="changeQuantity(2, -1)"
                  class="w-5 h-5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all active:scale-90 cursor-pointer"
                >
                  -
                </button>
                <span class="qty-display text-xs font-mono-code font-bold text-white px-1.5">
                  1
                </span>
                <button
                  onclick="changeQuantity(2, 1)"
                  class="w-5 h-5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all active:scale-90 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div class="text-right">
              <div class="text-[10px] text-zinc-500 font-mono-code">
                Unit: $18,000 × 1
              </div>
              <div class="text-xs sm:text-sm font-bold text-white font-mono-code total-card-budget">
                $18,000.00
              </div>
            </div>

            <button
              onclick="toggleStatus(2)"
              class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all cursor-pointer"
              title="Toggle status"
            >
              <span>Mark Completed</span>
              <svg
                class="w-3.5 h-3.5 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>
        </article>

        {/* PROJECT CARD 3  */}
        <article class="project-card bg-[#121215] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-4 sm:p-5 transition-all relative group shadow-sm">
          {/* Top Card Row  */}
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span class="px-2 py-0.5 text-[11px] font-medium rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Mobile App
              </span>
              <span class="status-indicator px-2 py-0.5 text-[11px] font-medium rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 inline-flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Pending</span>
              </span>
            </div>

            <div class="flex items-center gap-1">
              <button
                onclick="toggleFavorite(3)"
                class="favorite-btn p-1.5 rounded-lg text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Favorite"
              >
                <svg
                  class="w-4 h-4 fill-amber-400"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              </button>

              <button
                onclick="editProject(3)"
                class="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Edit"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </button>

              <button
                onclick="deleteProject(3)"
                class="p-1.5 rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Delete"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Middle Card Row  */}
          <div class="space-y-1 mb-3.5">
            <h4 class="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
              Fintech Mobile Banking App
            </h4>
            <div class="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-zinc-400">
              <span class="inline-flex items-center gap-1 text-zinc-300">
                Client:
                <strong class="text-zinc-200 font-semibold">
                  Zenith Capital
                </strong>
              </span>
              <span class="text-zinc-700 hidden sm:inline">•</span>
              <a
                href="https://zenithpay.finance"
                target="_blank"
                class="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 hover:underline font-mono-code"
              >
                <span>zenithpay.finance</span>
                <svg
                  class="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Card Row */}
          <div class="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
            <div class="flex items-center gap-1.5 bg-zinc-950 px-2 py-1 rounded-xl border border-zinc-800">
              <span class="text-[11px] text-zinc-400">Qty:</span>
              <div class="flex items-center gap-1">
                <button
                  onclick="changeQuantity(3, -1)"
                  class="w-5 h-5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all active:scale-90 cursor-pointer"
                >
                  -
                </button>
                <span class="qty-display text-xs font-mono-code font-bold text-white px-1.5">
                  2
                </span>
                <button
                  onclick="changeQuantity(3, 1)"
                  class="w-5 h-5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all active:scale-90 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div class="text-right">
              <div class="text-[10px] text-zinc-500 font-mono-code">
                Unit: $24,000 × 2
              </div>
              <div class="text-xs sm:text-sm font-bold text-white font-mono-code total-card-budget">
                $48,000.00
              </div>
            </div>

            <button
              onclick="toggleStatus(3)"
              class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all cursor-pointer"
              title="Toggle status"
            >
              <span>Mark Completed</span>
              <svg
                class="w-3.5 h-3.5 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>
        </article>

        {/* PROJECT CARD 4  */}
        <article class="project-card bg-[#121215] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-4 sm:p-5 transition-all relative group shadow-sm">
          {/* Top Card Row  */}
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span class="px-2 py-0.5 text-[11px] font-medium rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20">
                Cloud / DevOps
              </span>
              <span class="status-indicator px-2 py-0.5 text-[11px] font-medium rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Completed</span>
              </span>
            </div>

            <div class="flex items-center gap-1">
              <button
                onclick="toggleFavorite(4)"
                class="favorite-btn p-1.5 rounded-lg text-zinc-500 hover:text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Favorite"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              </button>

              <button
                onclick="editProject(4)"
                class="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Edit"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </button>

              <button
                onclick="deleteProject(4)"
                class="p-1.5 rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Delete"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Middle Card Row  */}
          <div class="space-y-1 mb-3.5">
            <h4 class="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
              Cloud Infrastructure Migration
            </h4>
            <div class="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-zinc-400">
              <span class="inline-flex items-center gap-1 text-zinc-300">
                Client:
                <strong class="text-zinc-200 font-semibold">
                  HyperScale Networks
                </strong>
              </span>
              <span class="text-zinc-700 hidden sm:inline">•</span>
              <a
                href="https://hyperscale.cloud"
                target="_blank"
                class="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 hover:underline font-mono-code"
              >
                <span>hyperscale.cloud</span>
                <svg
                  class="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          Bottom Card Row
          <div class="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
            <div class="flex items-center gap-1.5 bg-zinc-950 px-2 py-1 rounded-xl border border-zinc-800">
              <span class="text-[11px] text-zinc-400">Qty:</span>
              <div class="flex items-center gap-1">
                <button
                  onclick="changeQuantity(4, -1)"
                  class="w-5 h-5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all active:scale-90 cursor-pointer"
                >
                  -
                </button>
                <span class="qty-display text-xs font-mono-code font-bold text-white px-1.5">
                  1
                </span>
                <button
                  onclick="changeQuantity(4, 1)"
                  class="w-5 h-5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all active:scale-90 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div class="text-right">
              <div class="text-[10px] text-zinc-500 font-mono-code">
                Unit: $15,000 × 1
              </div>
              <div class="text-xs sm:text-sm font-bold text-emerald-400 font-mono-code total-card-budget">
                $15,000.00
              </div>
            </div>

            <button
              onclick="toggleStatus(4)"
              class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="Toggle status"
            >
              <span>Mark Pending</span>
              <svg
                class="w-3.5 h-3.5 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
            </button>
          </div>
        </article>
      </div>
    </>
  );
};

export default ProjectCards;
