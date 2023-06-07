import Demo from "../images/demo.jpg";
import { GrLocation } from "react-icons/gr";
// import {CiCalenderDate} from 'react/icons/ci'

const Events = () => {
  const fih =
    "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jaWFsJTIwaW5jbHVzaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60";

  const ps =
    "https://images.unsplash.com/photo-1515603403036-f3d35f75ca52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHB1YmxpYyUyMHNwZWFraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60";

  return (
    <div id="Events" className="bg-white">
      <div className="max-w-7xl mx-auto py-10 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-5 pb-6 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            News & Events
          </h1>
          <p className="text-gray-600 text-xl">
            Catch the latest and upcoming events and news!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly">

          <div className="mb-4 p-0 sm:p-4 md:w-1/3 max-w-2xl">
            {/* Card container */}
            <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
  
              <div className="relative w-full overflow-hidden">
              <img
                  src={fih}
                  alt=""
                  className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-110"
                />
              </div>

              {/* :CARD BODY */}
              <div className="my-6 py-3 px-8 flex flex-col justify-around items-center">
                {/* ::Title */}
                <h1 className="title-font text-2xl text-center font-bold text-gray-800 antialiased">
                  Financial Inclusion Hackathon
                </h1>
                {/* ::Excerpt */}
                <p className="line-clamp-8 py-5 overflow-hidden leading-relaxed text-sm text-gray-500 text-left font-medium cursor-pointer">
                  The main objective of this hackathon is to
                  encourage participants to use machine learning
                  techniques to develop innovative solutions
                  that promote financial inclusion.
                </p>
              </div>

              {/* ::CARD FOOTER */}
              <div className="py-3 px-2 flex flex-wrap justify-around border-t border-gray-200">
                {/* Location */}
                <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide cursor-pointer">
                  <GrLocation />
                  UNESWA
                </span>
                {/* ::Date */}
                <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  TBA
                </span>
                {/* ::Reading time */}
                <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  TBA
                </span>
              </div>
            </div>
          </div>

          <div className="mb-4 p-0 sm:p-4 md:w-1/3 max-w-2xl">
            {/* Card container */}
            <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full overflow-hidden">
                {/* ::Image */}
                <img
                  src={ps}
                  alt=""
                  className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-110"
                />
              </div>

              {/* :CARD BODY */}
              <div className="my-6 py-3 px-8 flex flex-col justify-around items-center">
                {/* ::Title */}
                <h1 className="title-font text-2xl text-center font-bold text-gray-800 antialiased">
                  Public Speaking & CV Writing Seminar
                </h1>
                {/* ::Excerpt */}
                <p className="line-clamp-8 py-5 overflow-hidden leading-relaxed text-sm text-gray-500 text-left font-medium cursor-pointer">
                  This seminar will help build the confidence needed when 
                  delivering presentations, help make those social connections
                  and also help in other aspects such as proper team management, 
                  developing vocavulary and fluency in the language.
                </p>
              </div>

              {/* ::CARD FOOTER */}
              <div className="py-3 px-2 flex flex-wrap justify-around border-t border-gray-200">
                {/* ::Author */}
                <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide cursor-pointer">
                  <GrLocation />
                  TBA
                </span>
                {/* ::Date */}
                <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  TBA
                </span>
                {/* ::Reading time */}
                <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  TBA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
