import { motion } from "framer-motion";
import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
import CardComponents from "../components/CardComponents";
import { Link } from "react-router-dom";



const Services = () => {
  

  return (
    <>
      <motion.div
        initial={{ x: -250 }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="text-3xl font-mulish font-semibold mt-28 px-5 sm:pl-10 md:text-2xl md:pl-12 lg:pl-14 xl:pl-16 xl:pb-4 xl:text-3xl">
          Services
        </h1>
      </motion.div>
      <div className="grid pb-12 px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16">
        <div>
          <CardComponents />
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="mb-20 mt-6 lg:flex lg:mb-24 lg:mt-12 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="text-babyblue text-xl font-inter font-semibold px-5 sm:pl-10 lg:text-2xl md:pl-12 lg:pl-14 lg:w-[450px] lg:pt-6 xl:pl-16 xl:w-[500px]">
            WHY YOU SHOULD CHOOSE US
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="grid space-y-4 font-inter p-6 sm:px-10 md:px-12 lg:space-y-6">
            <p>
              We provide full range of logistics related outsourcing services
              for freight, Forwardiers, NVOCCs, Auto Dealers and othe Exporters
              in the international Freight Industry.
            </p>
            <p>
              We can handle any kind of commodity and specialize in automotive
              Industry. Our Export Management program will help you to save the
              most money possible.
            </p>
            <p>
              We provide you with the safest loading process and inventory
              management along with Cargo Receipts and Inspection Reports.You
              will receive all photos of cargo at the time of receipt and at
              loading. It can be a great opportunity for you to expand your
              operation in South East of USA.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CONTACT */}
      <ContactComponent />

      {/* FOOTER */}
      <Footer />
    </>
  );
};
export default Services;
