export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="data:image/png;base64,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"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Save Money
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
