import Demo from "../images/demo3.jpg";

const Hero = () => {
  return (
    <div
      className=" relative bg-center bg-cover h-3/5"
      style={{ backgroundImage: `url(${Demo})` }}
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-14 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl text-white font-bold leading-none md:text-4xl sm:text-5xl">
          Welcome to the Information, Communication & Technology Society
        </h1>
        <p className="px-8 mt-6 mb-8 text-lg text-white">
          Join us in providing innovation and collaboration in the University
          and the Country
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
            <a
              rel="noopener"
              href="#About"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#Membership"
              rel="noopener"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-white hover:text-gray-100 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
            >
              Register
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
