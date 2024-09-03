


const YouTubeEmbed = ()=> {
  return (
    <div className=" aspect-video ">
      <iframe
        className=" h-full w-full rounded-xl lg:rounded-2xl"
        src="https://www.youtube.com/embed/JoHsfOz1Q5w" 
        title="Car Shipping: What You Need To Know!"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
    </div>
  );
};
export default YouTubeEmbed;
