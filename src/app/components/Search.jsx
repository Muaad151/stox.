const Search = () => {
  return (
    <div className="hidden md:inline">
      <form className="flex items-center max-w-sm mx-auto ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="search"
            className="bg-white border border-gray-300 text-gray-800 text-sm rounded-full  block w-full ps-2 p-1  "
            placeholder="Search..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-1.5 ms-2 text-sm font-medium text-white bg-[#2196f3] rounded-full border  hover:bg-blue-800 focus:ring-4 focus:outline-none "
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  )
}

export default Search