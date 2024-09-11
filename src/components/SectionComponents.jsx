import SectionIcons from "../utilities/SectionIcons";
import { motion } from "framer-motion";


const SectionComponents = () => {

    return (
      <>
        <div className="md:grid md:grid-cols-2 lg:flex lg:justify-between lg:overflow-x-scroll lg:mx-4 lg:overflow-y-hidden">
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
            <SectionIcons
              icon="/delivery-courier.svg"
              title="Bid and buy a lot"
              content="There's a wide variety of auctions where bargains can be had at wholesale prices for buyers who know what they're doing. "
            />
          </motion.div>

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
            <SectionIcons
              icon="/delivery-truck.svg"
              title="Deliver your units from the auction to your yard"
              content="After bidding, the vehicle will be sent to our yard for storage unit departure."
            />
          </motion.div>

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
            <SectionIcons
              icon="/container.svg"
              title="Load your vehicles into a container"
              content=" At our loading facility your car is driven into the container and carefully positioned before all four wheels are safely chocked."
            />
          </motion.div>

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
            <SectionIcons
              icon="/packages.svg"
              title="Buy all the spare parts if necessary"
              content="We offer original spare parts and components for the different types of vehicles. "
            />
          </motion.div>

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
            <SectionIcons
              icon="/ship.svg"
              title="Ship the container to your place"
              content="Your car will arrive at the destination in the condition it was loaded in the container."
            />
          </motion.div>
        </div>
      </>
    );
}
export default SectionComponents;