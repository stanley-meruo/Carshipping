import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "../utilities/Card";
import image0 from "../assets/buying-assistance.png";
import image1 from "../assets/auto-transport.png";
import image2 from "../assets/warehousing-mobile.png";
import image2a from "../assets/warehousing-desktop.png";
import image3 from "../assets/automobile-mobile.png";
import image3a from "../assets/automobile-desktop.png";
import image4 from "../assets/motocycling.png";
import image5 from "../assets/boat.png";
import image6 from "../assets/heavy-machinery.png";
import image7 from "../assets/dismantling.png";
import image8 from "../assets/parts-purchase-mobile.png";
import image8a from "../assets/parts-purchase-desktop.png";


const CardComponents = () => {
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
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 lg:gap-x-7 lg:grid-cols-3 xl:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card image={image0} description="Buying asssitance" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card image={image1} description="Auto Transport" />
        </motion.div>

        <motion.div
          className="xl:col-span-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="lg:hidden">
            <Card image={image2} description="Warehousing" />
          </div>
          <div className="hidden lg:block">
            <Card image={image2a} description="Warehousing" />
          </div>
        </motion.div>

        <motion.div
          className="xl:col-span-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="lg:hidden">
            <Card image={image3} description="Automobile Loading" />
          </div>
          <div className="hidden lg:block">
            <Card image={image3a} description="Automobile Loading" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card image={image4} description="Motorcycle loading" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card image={image5} description="Boat loading" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card image={image6} description="Heavy machinery loading." />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card image={image7} description="Dismantling" />
        </motion.div>

        <motion.div
          className="xl:col-span-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="lg:hidden">
            <Card image={image8} description="Parts purchchase assistance" />
          </div>
          <div className="hidden lg:block">
            <Card image={image8a} description="Parts purchchase assistance" />
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default CardComponents;
