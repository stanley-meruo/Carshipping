import { FaFacebook, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import Logofooter from "/logo-footer.svg"
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    
    return (
      <>
        <div className="bg-darkblue grid pt-12 pb-6 rounded-t-3xl px-5 -mt-5 sm:rounded-none ">
          <div className="sm:flex sm:justify-between sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <div>
              <img src={Logofooter} className="mx-auto w-44 lg:w-48" />
            </div>

            <ul className="text-white text-lg uppercase font-mulish text-center my-8 sm:-mt-0 sm:text-left">
              <li className="py-4">
                <Link
                  className="hover:text-babyblue hover:underline hover:underline-offset-[16px]"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="py-4">
                <Link
                  className="hover:text-babyblue hover:underline hover:underline-offset-[16px]"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="py-4">
                <Link
                  className="hover:text-babyblue hover:underline hover:underline-offset-[16px]"
                  to="/"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex flex-col items-center space-y-2 sm:-mt-4">
              <div className="flex items-center gap-2 mt-6">
                <FaFacebook className="w-10 h-10 text-white hover:bg-babyblue hover:rounded-lg p-2" />
                <FaYoutube className="w-10 h-10 text-white hover:bg-babyblue hover:rounded-lg p-2" />
                <FaInstagram className="w-10 h-10 text-white hover:bg-babyblue hover:rounded-lg p-2" />
                <FaXTwitter className="w-10 h-10 text-white hover:bg-babyblue hover:rounded-lg p-2" />
              </div>
              <div className="grid space-y-2 py-4 text-white text-center font-inter font-medium sm:text-left sm:space-y-4">
                <Link to="">
                  <p className="underline underline-offset-2 hover:text-babyblue">
                    info@mdashipping.us
                  </p>
                </Link>
                <p className="">+1 912 000 4300</p>
                <div>
                  <p>3456 Crestwood Parkway,</p>
                  <p>Suite 400, Duluth GA,</p>
                  <p>NewYork, USA</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-center mt-10 text-sm">
            Copyright &copy; 2024 MDA Shipping. All Right Reserved
          </p>
        </div>
      </>
    );
}
export default Footer;