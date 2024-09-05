

const Card = ({ description, image }) => {

  
  return (
    <>
      <div className="my-8 relative rounded-2xl hover:bg-babyblue hover:text-white cursor-pointer transform transition duration-500 hover:scale-105 sm:mb-0 ">
        <img
          className="w-full rounded-2xl shadow-md shadow-slate-400 sm:h-[300px] md:h-[350px] lg:h-[265px] lg:w-full xl:h-[330px]"
          src={image}
        />
        <div className="absolute top-10 w-[200px]">
          <p className="font-semibold font-mulish text-xl xl:text-2xl pl-6">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
