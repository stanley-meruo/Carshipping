import { GrHome, GrLocation, GrMail, GrPhone } from "react-icons/gr";
import Button from "../components/Button";




const Contact = () => {
    return (
      <>
        <div className="mt-24 p-5 font-mulish text-center grid space-y-2">
          <h1 className="text-3xl font-semibold">CONTACT</h1>
          <p className="lg:text-lg">
            Worldwide multimodal logistics and warehousing services for all
            types of vehicles.
          </p>
        </div>

        <div className="font-inter border-[1px] border-darkblue rounded-xl sm:m-8 md:flex md:flex-row-reverse md:mx-12 lg:mx-14 xl:mx-16">
          <div className="py-8 md:w-[1000px] lg:p-10 xl:p-20">
            <p className="text-center font-mulish text-xl font-semibold md:mt-4">
              ONLINE INQUIRY
            </p>
            <form action="" className="grid space-y-4 p-5 font-inter">
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                className="w-full py-4 px-2 capitalize focus:outline-none bg-transparent border-darkblue border-b-2 placeholder:text-gray-500 placeholder:text-sm"
              />
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                className="w-full py-4 px-2 focus:outline-none bg-transparent border-darkblue border-b-2 placeholder:text-gray-500 placeholder:text-sm"
              />
              <input
                type="number"
                id="number"
                placeholder="Phone Number"
                className="w-full py-4 px-2 focus:outline-none bg-transparent border-darkblue border-b-2 placeholder:text-gray-500 placeholder:text-sm"
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full py-4 px-2 focus:outline-none bg-transparent border-darkblue border-b-2 placeholder:text-gray-500 placeholder:text-sm"
              />
              <textarea
                id="comment"
                placeholder="Message"
                rows="4"
                cols="20"
                className="w-full py-4 px-2 resize-none capitalize border-darkblue border-b-2 focus:outline-none bg-transparent placeholder:text-gray-500 placeholder:text-sm"
              />
            </form>
            <div className="m-5">
              <Button
                title="SUBMIT"
                type="button"
                className="bg-white w-full px-16 py-4 text-gray-600 rounded-xl font-semibold font-inter cursor-pointer shadow-md shadow-blue-800 hover:bg-inputblue hover:text-white md:px-6 lg:w-60"
              />
            </div>
          </div>

          <div className="bg-contactBg bg-blue-950 bg-blend-overlay bg-no-repeat bg-center text-white font-inter space-y-6 py-12 px-5 sm:rounded-xl md:rounded-r-none md:space-y-10 lg:p-10 xl:p-20">
            <p className="text-xl font-mulish lg:mt-4">CONTACT INFORMATION</p>
            <p>
              We Ship FCL/LCL from the USA to around the world.
            </p>
            <div className="flex gap-3 pt-8 md:pt-24">
              <GrLocation className="w-8 h-8 sm:min-w-7 " />
              <p>3456 Crestwood Parkway,Suite 400, Duluth GA, NewYork, USA</p>
            </div>
            <div className="flex gap-3">
              <GrPhone className="w-6 h-6" />
              <p>(+1) 912 000 4300</p>
            </div>
            <div className="flex gap-3">
              <GrMail className="w-6 h-6" />
              <p>info@mdashipping.us</p>
            </div>
          </div>
        </div>
      </>
    );
}
export default Contact;