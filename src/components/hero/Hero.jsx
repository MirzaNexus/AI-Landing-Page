import Product from "@/assets/AppWide-2.png";
import Stars from "@/assets/star-bg.png";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="w-full lg:h-[1165px] md:h-[1050px] h-[800px] bg-black relative md:px-4 px-0 py-10 flex flex-col items-center overflow-hidden gap-6 ">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${Stars.src})` }}
      ></div>
      <div className="absolute w-full h-[308px] bottom-0 md:bg-[linear-gradient(to_bottom,transparent_20%,black)] bg-[linear-gradient(to_bottom,transparent_40%,black)] z-20"></div>
      <div className="absolute w-full h-[308px] top-0 bg-[linear-gradient(to_top,transparent,black_100%)] z-10"></div>
      <div className="absolute inset-0 md:bg-[radial-gradient(85%_85%,#602A9A,#622A9A_30%,transparent_80%)] bg-[radial-gradient(80%_80%,#602A9A,#622A9A_0%,transparent_100%)]"></div>
      <div className="absolute inset-0 lg:translate-y-[10%] md:translate-y-[22.5%] translate-y-[19%]">
        <div className="absolute b-w md:w-[569px] w-[350px] md:h-[569px] h-[300px] rounded-[50%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10">
          <div className="absolute w-6 h-6 b-w rounded-full md:top-1/2 top-10 md:left-0 left-7 md:-translate-x-1/2 translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="w-[70%] h-[70%] bg-white rounded-full "></div>
          </div>
        </div>
        <div className="absolute b-w md:w-[825px] w-[550px] md:h-[825px] h-[550px] rounded-[50%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10">
          <div className="absolute w-6 h-6 b-w rounded-full top-full right-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="w-[70%] h-[70%] bg-white rounded-full "></div>
          </div>
          <div className="absolute w-6 h-6 b-w rounded-full top-[80px] md:right-[140px] right-[55px] -translate-x-1/2 -translate-y-1/2   flex items-center justify-center">
            <div className="w-[70%] h-[70%] bg-white rounded-full "></div>
          </div>
        </div>
        <div className="absolute b-w md:w-[1100px] w-[800px] md:h-[1100px] h-[800px] rounded-[50%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10">
          <div className="absolute w-6 h-6 b-w rounded-full top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="w-[70%] h-[70%] bg-white rounded-full "></div>
          </div>
          <div className="absolute w-6 h-6 b-w rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="w-[70%] h-[70%] bg-white rounded-full "></div>
          </div>
          <div className="absolute w-10 h-10 b-w rounded-full md:top-28 top-5 left-36 md:left-32 translate-x-1/2 translate-y-1/2 flex items-center justify-center">
            <div className="w-[70%] h-[70%] bg-white rounded-full "></div>
          </div>
        </div>
      </div>
      <span className="inline-flex mt-10 bg-[#000000] b-w z-20 border-white/10 rounded-[30px] py-2 px-4 gap-3">
        <span className="w-fit inline-flex items-center px-[6px] rounded-[30px] lg:text-[12px] md:text-[14px] text-[10px] text-black bg-[#9855FF]">
          NEW
        </span>
        <p className="text-[#9855FF] lg:text-sm md:text-[16px] text-[14px]">
          Latest integration just arrived
        </p>
      </span>
      <div className="z-10 relative lg:w-[45%] md:w-[90%] w-[100%] text-white text-center flex flex-col items-center gap-6">
        <h1 className="lg:text-7xl md:text-8xl text-6xl  font-bold lg:h-[160px] md:h-[210px] h-[140px] tracking-tighter text-transparent bg-clip-text md:bg-[linear-gradient(to_bottom,#ffffff_50%,#B372CF)] bg-[linear-gradient(to_bottom,#ffffff_40%,#B372CF)] z-10">
          Boost your rankings with AI.
        </h1>
        <p className="md:w-[80%] w-[100%]  text-white/80 z-10 lg:text-[1.2rem] md:text-[1.4rem] text-[1.1rem] lg:leading-[1.6rem] leading-[1.8rem] md:mb-0 mb-[6px]">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <button className="bg-white w-fit text-black z-10 lg:text-[16px] text-lg rounded-md py-2 px-4 tracking-tighter">
          Start for free
        </button>
      </div>
      <div className="b-w absolute bg-[radial-gradient(50%_60%_at_center_center,#0D0718,#622A9A_48%,#0B0614_100%)] border-white/10 w-[95%] py-3 px-3 rounded-[20px] shadow-[0px_-16px_50px_14px_#622A9A] lg:-bottom-[6rem] -bottom-[1rem] ">
        <div className="absolute inset-0 rounded-[20px] bg-[linear-gradient(to_right,#0D0718,#622A9A_48%,#0B0614_100%)] opacity-20"></div>
        <Image
          src={Product}
          alt="product-img"
          className="w-[100%] h-[100%] bg-black object-contain b-w border-white/20 rounded-[10px]"
        />
      </div>
    </section>
  );
};

export default Hero;
