const Search = () => {
  return (
    <div data-aos="zoom-in" className="mb-20 bg-search h-[350px]">
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-4xl !text-center sm:text-left sm:text-4xl font-semibold text-black mt-20">
            How can we help ?
          </h1>

          <div className="relative w-full">
            <input
              data-aos="fade-up"
              type="text"
              id="submit-search"
              className="bg-gray-50 border border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
              placeholder="Search"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
