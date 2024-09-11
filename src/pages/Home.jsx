import { useEffect, useState } from "react";
import Button from "../components/Button.jsx";
import heroimage from "../assets/main.png";
import { Link } from "react-router-dom";
import CardComponents from "../components/CardComponents.jsx";
import SectionComponents from "../components/SectionComponents.jsx";
import ContactComponent from "../components/ContactComponent.jsx";
import Footer from "../components/Footer.jsx";
import YouTubeEmbed from "../components/YouTubeEmbed.jsx";
import { motion } from "framer-motion";


const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const scrollDirection = currentScrollPosition > 100 ? "down" : "up";
      setScrollDirection(scrollDirection);
      if (scrollDirection === "down") {
        setAnimate(false);
      } else if (scrollDirection === "up") {
        setAnimate(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      
      {/* HERO SECTION */}
      <div className=" md:flex md:flex-row md:pt-10">
        <motion.div
          className="sm:px-6"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className=" text-2xl font-semibold mt-32 px-6 font-mulish sm:text-3xl md:-mr-52 md:text-4xl md:min-w-[550px] lg:px-8 lg:text-5xl xl:text-6xl">
            We are an American based company professionally provide
            <span className="text-babyblue"> auto auction participating</span>
          </h1>
          <p className="p-6 font-inter md:min-w-[400px] md:-mr-16 lg:text-lg lg:max-w-[560px] lg:px-8 lg:my-5">
            We ship cars, motorcycles, boats, special machinery in containers
            from the USA to all over the world.
          </p>
          <Link to="contact">
            <div className="grid sm:flex sm:-mb-28 xl:mt-8">
              <Button
                title="CONTACT US"
                type="button"
                className="bg-babyblue mx-6 px-16 py-4 text-white rounded-xl font-semibold shadow-lg shadow-blue-800 drop-shadow-md font-inter hover:bg-darkblue sm:px-20 md:px-8 lg:py-5 lg:px-20 lg:ml-8 xl:px-20"
              />
            </div>
          </Link>
        </motion.div>
        <motion.div
          className=" md:-ml-48 md:mt-44 lg:mt-36 xl:mt-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            src={heroimage}
            className=" md:max-w-[555px] lg:max-w-[800px] lg:-ml-60 xl:min-w-[1000px]"
          />
        </motion.div>
      </div>

      <div className="mx-6 my-20 sm:mx-10 md:mx-12 lg:mx-14 xl:mx-16">
        <YouTubeEmbed />
      </div>

      {/* SERVICES SECTION */}
      <motion.div
        initial={{ x: -250 }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="text-babyblue text-xl font-inter font-semibold px-5 sm:pl-10 md:text-2xl md:pl-12 lg:pl-14 xl:pl-16 xl:pb-4 xl:text-3xl">
          SERVICES WE DO
        </h1>
      </motion.div>
      <div className="grid pb-12 px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16">
        <div>
          <CardComponents />
        </div>
        <div className="mx-auto my-8 sm:mt-16">
          <Link to="services">
            <Button
              title="MORE ABOUT SERVICES"
              type="button"
              className="bg-slate-200 px-12 py-4 text-gray-600 rounded-xl font-semibold font-inter shadow-md shadow-gray-400 drop-shadow-md hover:bg-babyblue hover:text-white hover:shadow-blue-800 lg:px-16"
            />
          </Link>
        </div>
      </div>

      {/* SECTION */}
      <h2 className="font-bold font-mulish text-3xl mx-5 my-8 sm:ml-10 md:ml-12 lg:ml-14 xl:ml-16 lg:text-4xl lg:">
        How it works
      </h2>
      <div className="mb-24">
        <SectionComponents />
        {/* <div className="absolute h-[2px] w-[338px] bottom-[743px] -left-[105px] bg-babyblue rotate-90 -z-50"></div> */}
      </div>

      {/* CONTACT */}
      <ContactComponent />

      {/* FOOTER */}
      <Footer />
    </>
  );
};
export default Home;
