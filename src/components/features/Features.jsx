import FeatureImages from "./featureImage/FeatureImages";
import FeaturePro from "./feature-pro/FeaturePro";
import Ring from "@/assets/ring.png";
import Corn from "@/assets/corn.png";
import Product from "@/assets/product.png";
import pro_part from "@/assets/pro-part.png";
const Features = () => {
  return (
    <div className="md:px-4 py-12 w-full bg-black flex flex-col items-center gap-16">
      <h1 className="md:text-4xl text-3xl font-semibold text-transparent bg-clip-text md:bg-[linear-gradient(to_bottom,#ffffff,#9855FF)] bg-[linear-gradient(to_bottom,#ffffff_30%,#9855FF)] lg:w-[47%] md:w-[75%] w-[95%] text-center">
        Harness the power of AI, making search engine optimization intuitive and
        effective for all skill levels.
      </h1>
      <div className="w-[90%]">
        <div className="w-[100%] p-2 flex md:flex-row flex-col gap-1">
          <FeatureImages
            featureImage={Ring}
            title="SEO goal setting"
            des="Helps you set and achieve SEO goals with guided assistance."
          />
          <FeaturePro pro={Product} display={true} />
        </div>
        <div className="w-[100%] p-2 flex md:flex-row flex-col gap-1">
          <FeaturePro pro={pro_part} display={false} />
          <FeatureImages
            featureImage={Corn}
            title="Smart Keyword Generator"
            des="Automatic suggestions and the best keywords to target."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
