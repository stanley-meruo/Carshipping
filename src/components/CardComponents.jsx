import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import Card from "../utilities/card";


const ServicesComponents = () => {

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
            <Card
              image="src/assets/buying-assistance.png"
              description="Buying asssitance"
            />
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
            <Card
              image="src/assets/auto-transport.png"
              description="Auto Transport"
            />
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
              <Card
                image="src/assets/warehousing-mobile.png"
                description="Warehousing"
              />
            </div>
            <div className="hidden lg:block">
              <Card
                description="Warehousing"
                image="src/assets/warehousing-desktop.png"
              />
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
              <Card
                image="src/assets/automobile-mobile.png"
                description="Automobile Loading"
              />
            </div>
            <div className="hidden lg:block">
              <Card
                image="src/assets/automobile-desktop.png"
                description="Automobile Loading"
              />
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
            <Card
              image="src/assets/motocycling.png"
              description="Motorcycle loading"
            />
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
            <Card image="src/assets/boat.png" description="Boat loading" />
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
            <Card
              image="src/assets/heavy-machinery.png"
              description="Heavy machinery loading."
            />
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
            <Card
              image="src/assets/dismantling.png"
              description="Dismantling"
            />
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
              <Card
                image="src/assets/parts-purchase-mobile.png"
                description="Parts purchchase assistance"
              />
            </div>
            <div className="hidden lg:block">
              <Card
                image="src/assets/parts-purchase-desktop.png"
                description="Parts purchchase assistance"
              />
            </div>
          </motion.div>
        </div>
      </>
    );
}
export default ServicesComponents;