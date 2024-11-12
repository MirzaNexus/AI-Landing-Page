import Logo1 from "@/assets/logo1.png";
import Logo2 from "@/assets/logo2.png";
import Logo3 from "@/assets/logo3.png";
import Logo4 from "@/assets/logo4.png";
import Logo5 from "@/assets/logo5.png";
import Logo6 from "@/assets/logo6.png";
import Logo7 from "@/assets/logo7.png";
import Logo8 from "@/assets/logo8.png";
import Image from "next/image";
const LogoTicker = () => {
  return (
    <section className="w-full h-auto bg-black md:py-14 py-10 px-2 flex flex-col gap-10 items-center justify-center">
      <h3 className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#ffffff,#9855FF)] bg-black text-center b-w border-white/10 w-fit px-4 py-2 rounded-[10px] font-bold">
        Trusted by the world’s most innovative teams
      </h3>
      <div className="w-full flex items-center justify-center flex-wrap p-4 lg:gap-16 md:gap-9 gap-4">
        <Image src={Logo1} alt="Logo-Images" className="img" />
        I I
        <Image src={Logo2} alt="Logo-Images" className="img" />
        I
        <Image src={Logo3} alt="Logo-Images" className="img" />
        I
        <Image src={Logo4} alt="Logo-Images" className="img" />
        I
        <Image src={Logo5} alt="Logo-Images" className="img" />
        I
        <Image src={Logo6} alt="Logo-Images" className="img" />
        I
        <Image src={Logo7} alt="Logo-Images" className="img" />
        I
        <Image src={Logo8} alt="Logo-Images" className="img" />
      </div>
    </section>
  );
};

export default LogoTicker;
