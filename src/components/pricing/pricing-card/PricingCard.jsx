import Check from "@/assets/check.svg";
import Pattern from "@/assets/patternbox.png";
import { twMerge } from "tailwind-merge";
import Button from "@/components/button/Button";
const PricingCard = ({
  title,
  monthlyPrice,
  features,
  buttonText,
  inverse,
}) => {
  return (
    <div
      className={twMerge(
        "b-w border-white/30 relative bg-black rounded-[10px] px-4 md:py-2 py-4 flex flex-col gap-3 lg:w-[25%] md:w-[33%] w-[70%] h-[100%] overflow-hidden",
        inverse === true && "bg-[linear-gradient(to_bottom,black,#361764)] z-20"
      )}
    >
      {inverse === true && (
        <>
          <div
            className="absolute inset-0 aspect-video bg-contain opacity-20 h-[100%] -translate-x-[5.5%] 
            bg-blend-overlay
            "
            style={{ backgroundImage: `url(${Pattern.src})` }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000_12%,transparent_40%)]"></div>
        </>
      )}
      <h1 className="relative text-white text-2xl font-bold">{title}</h1>
      <span className="relative text-white/60 text-md">{`$_${monthlyPrice}/month`}</span>
      <div className=" relative [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <hr />
      </div>
      <div className="w-[100%] relative flex flex-col justify-between h-[calc(100vh-20%)] gap-2">
        <div className="relative">
          {features?.map((str, feature_id) => (
            <div key={feature_id} className="flex items-center gap-3 mb-3">
              <Check />
              <span className="text-white/90 lg:text-md md:text-sm text-md">
                {str}
              </span>
            </div>
          ))}
        </div>
        <span className="text-xl">
          <Button>{buttonText}</Button>
        </span>
      </div>
    </div>
  );
};

export default PricingCard;
