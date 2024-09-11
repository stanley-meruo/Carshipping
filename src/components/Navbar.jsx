import { useState, useEffect, useRef } from "react";
import Logoheader from "/logo-header.svg";
import { PiCirclesFourLight } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle click outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);



  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-transform duration-1000 ease-in-out ${
        isScrolled ? "bg-blue-200" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-6 sm:px-5 md:px-6 lg:px-8 xl:px-10">
        {/* Logo */}
        <div className="px-6">
          <Link to="/">
            <img src={Logoheader} alt="logo" className="w-40 lg:w-48" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden font-inter font-medium sm:flex sm:space-x-4 sm:text-sm sm:mr-4 md:space-x-10 md:text-base lg:space-x-16 lg:text-lg xl:space-x-20">
          <Link to="/">
            <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-babyblue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-babyblue">
              HOME
            </li>
          </Link>
          <Link to="/services">
            <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-babyblue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-babyblue">
              SERVICES
            </li>
          </Link>
          <Link to="/contact">
            <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-babyblue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-babyblue">
              CONTACT
            </li>
          </Link>
        </ul>
        <div className="hidden sm:flex sm:gap-2 sm:pr-5 lg:gap-5">
          <FaFacebook className="w-7 h-7 text-white rounded-md bg-babyblue p-2 md:w-8 md:h-8" />
          <FaYoutube className="w-7 h-7 text-white rounded-md bg-babyblue p-2 md:w-8 md:h-8" />
          <FaInstagram className="w-7 h-7 text-white rounded-md bg-babyblue p-2 md:w-8 md:h-8" />
          <FaXTwitter className="w-7 h-7 text-white rounded-md bg-babyblue p-2 md:w-8 md:h-8" />
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden pr-1">
          {/* Hamburger icon */}
          <PiCirclesFourLight
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-babyblue w-16 h-10 hover:text-darkblue focus:outline-none sm:hidden"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-y-0 right-0 w-full z-50 bg-blue-100 transform shadow-lg ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-1000 ease-in-out sm:hidden`}
      >
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex justify-between"
        >
          <div className="p-5">
            <Link to="/">
              <img src={Logoheader} alt="logo" className="w-40" />
            </Link>

            <ul className="text-lg font-inter font-medium py-24">
              <Link to="/">
                <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-babyblue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-babyblue my-6">
                  HOME
                </li>
              </Link>
              <Link to="services">
                <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-babyblue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-babyblue">
                  SERVICES
                </li>
              </Link>
              <Link to="contact">
                <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-babyblue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-babyblue my-6">
                  CONTACT
                </li>
              </Link>
            </ul>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2 mt-6">
                <FaFacebook className="w-10 h-10 text-white rounded-md bg-babyblue  p-2" />
                <FaYoutube className="w-10 h-10 text-white rounded-md bg-babyblue  p-2" />
                <FaInstagram className="w-10 h-10 text-white rounded-md bg-babyblue p-2" />
                <FaXTwitter className="w-10 h-10 text-white rounded-md bg-babyblue p-2" />
              </div>

              <div className="grid space-y-2 py-4 font-inter font-semibold">
                <p className="">info@mdashipping.us</p>
                <p className="">(+1) 912 000 4300</p>
              </div>
            </div>
          </div>
          <div className="bg-darkblue px-4 pt-6">
            <IoIosArrowBack
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-babyblue hover:text-white w-10 h-10 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
