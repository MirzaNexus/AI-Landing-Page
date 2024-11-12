import Image from "next/image";
const FeatureImages = ({ featureImage, title, des }) => {
  return (
    <div className="lg:w-[346px] md:w-[246px] w-[370px] lg:h-[400px] h-[330px] b-w border-white/10 rounded-lg p-2 flex flex-col lg:gap-2 md:order-none order-1">
      <Image
        src={featureImage}
        alt="Ring-Images"
        className="md:w-[265px] w-[220px] lg:h-[230px] h-[200px] lg:mb-6 self-center"
      />
      <h3 className="text-white lg:text-xl text-lg p-2">{title}</h3>
      <p className="text-white/50 lg:px-2 lg:text-xl md:text-[16px] text-lg lg:w-[300px] md:w-[220px] w-[320px] h-[60px]">
        {des}
      </p>
    </div>
  );
};

export default FeatureImages;
