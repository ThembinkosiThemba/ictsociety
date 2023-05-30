import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlinePhone,
} from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";

const Footer = () => {
  return (

    // className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    <footer id="Contact" className="bg-white py-16 px-0 max-w-7xl mx-auto  sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-start">
          <div className="w-full md:w-1/4 px-4 my-3 hover:shadow-xl rounded-md sm:mb-40">
            <h4 className="text-black text-lg">Address</h4>
            <ul className="list-reset text-black">
              <li className="my-2 text-sm">Faculty of Science & Engineering</li>
              <li className="my-2 text-sm">Department of Computer Science</li>
              <li className="my-2 text-sm">University of Eswatini</li>
              <li className="my-2 text-sm">Private Bag 4</li>
              <li className="my-2 text-sm">Kwaluseni, M201, Eswatini</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 my-3 hover:shadow-xl rounded-md">
            <h4 className="text-black uppercase mb-4">Socials</h4>
            <ul className="text-black list-reset">
              <li className="my-2">
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.facebook.com/Uneswa-ICT-Society-116495064667989/"
                >
                  <AiOutlineFacebook fontSize={35} />
                </a>
              </li>
              <li className="my-2">
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://instagram.com/uneswaictsociety?igshid=ZDdkNTZiNTM="
                >
                  <AiOutlineInstagram fontSize={35} />
                </a>
              </li>
              <li className="my-2">
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://chat.whatsapp.com/HVj71lShkOMD4NbiZmFXRf"
                >
                  <AiOutlineWhatsApp fontSize={35} />
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 my-3 hover:shadow-xl rounded-md">
            <h4 className="text-black uppercase mb-4">About</h4>
            <ul className="text-black list-reset">
              <li className="my-2">
                <a href="">Tutorials</a>
              </li>
              <li className="my-2">
                <a href="">Membership</a>
              </li>
              <li className="my-2">
                <a href="">Register</a>
              </li>
              <li className="my-2">
                <a href="">Events</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 my-3 hover:shadow-xl rounded-md">
            <h4 className="text-black uppercase mb-4">Contact</h4>
            <ul className="list-reset text-black">
              <li className="my-2 flex">
                <AiOutlinePhone fontSize={20} /> +2687878787878
              </li>
              <li className="my-2 flex">
                <HiOutlineMailOpen fontSize={20} /> uneswaictsociety@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
