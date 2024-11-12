import Pattern from "@/assets/patternbox.png";
const CtaSection = () => {
  return (
    <div className="w-full h-[558px]  bg-black flex items-center justify-center">
      <div
        className="relative rounded-[10px] md:w-[80%] w-[90%] h-[473px] bg-[rgb(140,69,255,0.5)] bg-blend-overlay aspect-video bg-contain flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${Pattern.src})` }}
      >
        <div className="absolute rounded-[10px] b-w border-white/20 inset-0 lg:bg-[radial-gradient(50%_60%_at_50%_10%,transparent,#000000)] md:bg-[radial-gradient(60%_60%_at_50%_10%,transparent,#000000)] bg-[linear-gradient(transparent,#000000_80%)]"></div>
        <div className="relative lg:w-[40%] md:w-[70%] w-[100%] py-4 flex flex-col items-center gap-8 justify-center">
          <h1 className=" md:text-6xl text-5xl md:mb-2 text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#ffffff_40%,#9855FF)] font-bold text-center">
            AI-driven SEO for everyone.
          </h1>
          <span className=" w-[90%] inline-flex items-center ">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 text-white bg-transparent b-w outline-none border-white/50 h-[44.6px] rounded-l-md "
            />
            <button className="bg-white w-fit text-black lg:text-[16px] text-lg rounded-r-md py-2 px-4 tracking-tighter">
              Start for free
            </button>
          </span>
          <span className=" md:w-[70%] w-[80%] text-white/60 inline-flex items-center gap-2">
            <p>No credit card required.</p>
            <p>7-days free trial</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
