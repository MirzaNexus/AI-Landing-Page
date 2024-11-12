import Logo from "@/assets/Logo.svg";
import Instagram from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";
import X from "@/assets/social-x.svg";
import Youtube from "@/assets/social-youtube.svg";
const Footer = () => {
  return (
    <div className="lg:p-5 w-full min-h-[333px] flex flex-col md:flex-row md:justify-between md:gap-0 gap-5 bg-black">
      <div className="-white lg:w-[25%] md:w-[33%] w-full flex flex-col justify-between md:gap-6">
        <div className="w-[100%] flex flex-col pl-4 py-5 ">
          <Logo className="mb-5 object-contain h-[50px] rounded-[10px] w-[50px] drop-shadow-[0px_0px_6px_#622A9A]" />
          <p className="w-[270px] text-sm text-slate-300">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website.
          </p>
        </div>
        <div className="flex item-center gap-3 pl-4 py-5">
          <Instagram className="w-6 h-6 text-slate-300" />
          <Linkedin className="w-6 h-6 text-slate-300" />
          <Pin className="w-6 h-6 text-slate-300" />
          <X className="w-6 h-6 text-slate-300" />
          <Youtube className="w-6 h-6 text-slate-300" />
        </div>
      </div>
      <div className=" flex md:flex-row flex-col lg:gap-24 md:gap-14 gap-10 md:py-5 md:pr-4 pl-4 pb-10">
        <div className="flex flex-col gap-4 ">
          <span className="text-white text-xl font-semibold">Product</span>
          <span className="text-slate-400 text-[16px]">Features</span>
          <span className="text-slate-400 text-[16px]">Integrations</span>
          <span className="text-slate-400 text-[16px]">Updates</span>
          <span className="text-slate-400 text-[16px]">FAQ</span>
          <span className="text-slate-400 text-[16px]">Pricing</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white text-xl font-semibold">Company</span>
          <span className="text-slate-400 text-[16px]">About</span>
          <span className="text-slate-400 text-[16px]">Blog</span>
          <span className="text-slate-400 text-[16px]">Careers</span>
          <span className="text-slate-400 text-[16px]">FAQ</span>
          <span className="text-slate-400 text-[16px]">Press</span>
          <span className="text-slate-400 text-[16px]">Contact</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white text-xl font-semibold">Resources</span>
          <span className="text-slate-400 text-[16px]">Examples</span>
          <span className="text-slate-400 text-[16px]">Community</span>
          <span className="text-slate-400 text-[16px]">Guides</span>
          <span className="text-slate-400 text-[16px]">Docs</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white text-xl font-semibold">Legal</span>
          <span className="text-slate-400 text-[16px]">Privacy</span>
          <span className="text-slate-400 text-[16px]">Terms</span>
          <span className="text-slate-400 text-[16px]">Security</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
