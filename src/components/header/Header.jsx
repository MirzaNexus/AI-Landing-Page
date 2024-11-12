import Logo from "@/assets/Logo.svg";
import Vector from "@/assets/Vector.svg";
import Menu from "@/assets/menu.svg";
import Button from "../button/Button";
const Header = () => {
  return (
    <nav className="md:px-0 px-4 w-full h-[80px] bg-[#000000] flex items-center md:justify-center justify-between lg:gap-[74px] gap-[40px]">
      <Logo className="w-[38px] h-[38px] b-w border-white/20 shadow-[0px_0px_12px_#622A9A] rounded-[10px]" />
      <div className="md:block hidden">
        <div className="b-w border-white/20 rounded-[20px] text-white/60 flex items-center justify-between w-[512px] h-[42px] py-2 px-4 ">
          <span className="inline-flex items-center gap-1">
            Features<span>{<Vector />}</span>
          </span>
          <span>Developers</span>
          <span className="inline-flex items-center gap-1">
            Company<span>{<Vector />}</span>
          </span>
          <span>Blog</span>
          <span>ChangeLog</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Button>Join Wishlist</Button>
        <Menu className="w-7 h-7 block md:hidden " />
      </div>
    </nav>
  );
};

export default Header;
