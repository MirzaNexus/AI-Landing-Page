import Client from "@/assets/Avatar.png";
const Clients = () => {
  return (
    <section className="w-full h-[723px] bg-black px-2  flex flex-col items-center justify-center lg:gap-8 gap-10 overflow-hidden">
      <div className="lg:w-[27%] md:w-[44%] w-[80%] text-center">
        <h1 className=" md:text-6xl text-4xl mb-4 text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#ffffff_20%,#9855FF)] font-bold">
          Our clients
        </h1>
        <p className="text-white/80 md:text-lg text-xl leading-6">
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>
      </div>
      <div className=" w-[85%] lg:h-[401px] md:h-[334px] h-[290px] relative lg:[mask-image:radial-gradient(ellipse_75%_75%,black,black,transparent_80%)] [mask-image:radial-gradient(ellipse_75%_75%,black,black,transparent_85%)] ">
        <div className="absolute inset-0 opacity-30 lg:bg-[radial-gradient(40%_80%_at_25%_50%,#8C45FF,transparent_100%)] z-10 md:bg-[radial-gradient(40%_80%_at_28%_50%,#8C45FF,transparent_100%)] bg-[radial-gradient(64%_90%_at_44%_50%,#8C45FF,transparent_100%)]"></div>
        <div className="absolute inset-0 "></div>
        <div className="absolute w-[100%]  border-t-[2px] border-solid border-white/60 lg:top-[20%] md:top-[25%] top-[20%]"></div>
        <div className="absolute w-[100%]  border-b-[2px] border-solid border-white/60 lg:bottom-[20%] md:bottom-[25%] bottom-[20%]"></div>
        <div className="absolute h-[100%] lg:w-[22%] md:w-[26%] w-[50%] border-l-[2px] border-solid border-white/60 lg:left-[20%] md:left-[18%] left-[25%]">
          <div
            className="absolute lg:h-[60%] md:h-[49%] h-[60%] w-full lg:top-[20%] md:top-[26%] top-1/2 -translate-y-1/2 md:-translate-y-0 
          aspect-video lg:bg-cover bg-contain bg-no-repeat
          "
            style={{ backgroundImage: `url(${Client.src})` }}
          ></div>
        </div>
        <div className="absolute h-[100%] lg:w-[33%] w-[50%] border-l-[2px] border-solid border-white/40 md:left-[42.5%] left-[75%]">
          <div className="absolute top-1/2 -translate-y-1/2 md:block hidden py-3 lg:pl-10 pl-6">
            <h2 className="text-white text-lg w-[80%] mb-3">
              ”This product has completely transformed how I manage my projects
              and deadlines”
            </h2>
            <span className="text-white/80 lg:text-sm  text-sm">
              Talia Taylor
            </span>
            <p className="text-white/60 text-sm ">
              Digital Marketing Director @ Quantum
            </p>
          </div>
        </div>
      </div>
      <div className="w-full text-center md:hidden flex flex-col items-center gap-2">
        <h2 className="text-white text-2xl w-[80%] mb-3">
          ”This product has completely transformed how I manage my projects and
          deadlines”
        </h2>
        <div>
          <span className="text-white/80 lg:text-lg  text-sm">
            Talia Taylor
          </span>
          <p className="text-white/60 text-md ">
            Digital Marketing Director @ Quantum
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
