import React from "react";

const Button = ({ children }) => {
  return (
    <div className=" text-white b-w border-[#602A9A] rounded-[10px] tracking-wider text-[12px] px-4 p-2 text-center bg-[linear-gradient(to_bottom,#8C45FF,#602A9A)] shadow-[0px_0px_12px_#8c45ff] relative">
      <div className="border-[2px] border-solid border-white/30 absolute inset-0 rounded-[10px] [mask-image:linear-gradient(to_bottom,black,transparent)] "></div>
      <div className="border-[2px] border-solid border-white/30 absolute inset-0 rounded-[10px] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      <div className="absolute inset-0 shadow-[0px_0px_6px_#8c45ff] rounded-[10px]"></div>
      <span>{children}</span>
    </div>
  );
};

export default Button;
