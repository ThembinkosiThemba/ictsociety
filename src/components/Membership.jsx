import { GrProjects, GrCertificate } from "react-icons/gr";
import { AiOutlineCode } from "react-icons/ai";

const Membership = () => {
  const features = [
    {
      icon: <GrCertificate className="h-6 w-6" />,
      title: "Certification",
      desc: "Get certified for being part of the society and you can showcase this on your portfolio.",
    },
    {
      icon: <GrProjects className="w-6 h-6" />,
      title: "Real time projects",
      desc: "Get experience by participating in real time projects alongside other society members",
    },
    {
      icon: <AiOutlineCode className="h-6 w-6" />,
      title: "Hackathon",
      desc: "Participate in hackathons and competitions organized by the society.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "Events & Speakers",
      desc: "Attend seminars hosted by the society whereby you will listen to outside speakers talk more ahout the industry",
    },
  ];

  return (
    <div id="Membership" className="relative py-22 md:pb-10 md:pt-10 bg-white">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
        <div className="max-w-xl">
          <h3 className="text-black text-3xl font-semibold sm:text-4xl">
            Join us and become a member
          </h3>
          <p className="text-black mt-3 mb-3 text-md">
            Become a full member of the society by paying the subsription fee of
            E50.00 and enjoy the benefits that comes with being a member!.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScEMHIIQ9wiEjbrYr7MECCmtHedksuOzqltGahL8ZiRnbj-kA/viewform?usp=sf_link"
            rel="noopener noreferrer" target="_blank"
            className="bg-gray-800 flex items-center justify-center gap-x-2 py-2 px-4 text-white hover:text-gray-900 hover:bg-gray-300 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
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
        <div className="mt-12 lg:mt-0">
          <ul className="grid gap-8 sm:grid-cols-2">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 bg-gray-200 text-cyan-400 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg text-black font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-black">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div
        className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div> */}
    </div>
  );
};

export default Membership;
