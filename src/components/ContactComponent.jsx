import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import Car from "../assets/carcontainer.png";

const ContactComponent = () => {
  return (
    <>
      <section className="bg-babyblue text-white py-20 rounded-t-3xl md:flex md:items-center md:pl-6 lg:pl-8 xl:pl-10">
        <div>
          <p className="text-2xl font-mulish font-semibold px-5 md:text-3xl lg:text-4xl">
            Contact us
          </p>
          <p className="p-5">
            Contact us if you need more information about our services
          </p>

          <form
            action=""
            className="grid space-y-4 px-5 font-inter md:h-60 md:space-y-3"
          >
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full p-4 rounded-xl capitalize bg-inputblue focus:outline-none placeholder:text-white placeholder:text-sm"
            />
            <input
              type="number"
              id="number"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl bg-inputblue focus:outline-none placeholder:text-white placeholder:text-sm"
            />
            <textarea
              id="comment"
              placeholder="Message"
              rows="4"
              cols="20"
              className="w-full p-4 rounded-xl resize-none capitalize bg-inputblue focus:outline-none placeholder:text-white placeholder:text-sm"
            />
          </form>
          <div className="flex flex-row items-center gap-3 py-4 px-5">
            <input
              type="checkbox"
              id=""
              className="h-5 w-5 accent-inputblue cursor-pointer"
            />
            <p>
              I agree with the
              <Link
                to="contact"
                className="underline underline-offset-4 cursor-pointer ml-1"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="m-5">
            <Button
              title="SEND US A MESSAGE"
              type="button"
              className="bg-white w-full px-16 py-4 text-gray-600 rounded-xl font-semibold font-inter cursor-pointer shadow-md shadow-blue-800 hover:bg-inputblue hover:text-white md:px-6"
            />
          </div>
        </div>

        <div className="mt-10 md:overflow-x-hidden">
          <img
            src={Car}
            alt=""
            className="w-full md:h-[430px] lg:w-[800px] lg:ml-8 lg:h-[520px] xl:ml-14 xl:w-[1000px]"
          />
        </div>
      </section>
    </>
  );
};
export default ContactComponent;
