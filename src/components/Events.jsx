import Demo from "../images/demo.jpg";
import { GrLocation } from "react-icons/gr";

const Events = () => {
  return (
    <div id="Events" className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-5 pb-6 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            News & Latest Events
          </h1>
          <p className="text-gray-600 text-xl">
            Events organised by the society or in relation to the society.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <div className="group relative shadow-lg px-1 py-1">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={Demo}
                alt="Article"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <a href="#" className="mt-4 block">
              <h3 className="text-lg text-gray-800 duration-150 group font-semibold">Indaba X</h3>
              <div className="flex">
                <GrLocation fontSize={21} />
                <p>Location</p>
              </div>
              <p className="mt-2 text-base text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </a>
          </div>
          <div className="group relative shadow-lg px-1 py-1">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={Demo}
                alt="Article"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <a href="#" className="mt-4 block">
              <h3 className="text-lg text-gray-800 duration-150 group font-semibold">Indaba X</h3>
              <div className="flex">
                <GrLocation fontSize={21} />
                <p>Location</p>
              </div>
              <p className="mt-2 text-base text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </a>
          </div>
          <div className="group relative shadow-lg px-1 py-1">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={Demo}
                alt="Article"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <a href="#" className="mt-4 block">
              <h3 className="text-lg text-gray-800 duration-150 group font-semibold">Indaba X</h3>
              <div className="flex">
                <GrLocation fontSize={21} />
                <p>Location</p>
              </div>
              <p className="mt-2 text-base text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
