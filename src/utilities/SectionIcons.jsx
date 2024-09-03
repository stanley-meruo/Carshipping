


const SectionIcons = ({ content, title, icon, }) => {
  return (
    <>
      <div className="flex justify-between mb-12 mx-6 gap-x-4 sm:mx-10 lg:grid lg:gap-y-4 lg:-mr-4">
        <div className="grid border-[3px] border-babyblue rounded-full h-20 min-w-20 sm:min-w-24 sm:h-24 sm:ml-2 lg:w-12">
          <img src={icon} className="w-10 m-auto sm:w-12" />
        </div>
        <div className="max-w-80 sm:max-w-[500px] md:w-72 lg:w-[300px]">
          <p className="font-medium text-xl mb-3 font-mulish leading-6 lg:w-60">
            {title}
          </p>
          <p className="font-inter leading-5 text-gray-700 lg:mt-4">{content}</p>
        </div>
      </div>
    </>
  );
};
export default SectionIcons;