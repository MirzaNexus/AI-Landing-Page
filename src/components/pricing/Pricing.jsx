import PricingCard from "./pricing-card/PricingCard";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];
const Pricing = () => {
  return (
    <div className="w-full lg:h-[793px] md:h-[850px] h-auto bg-black md:px-2 md:py-0 py-12 flex flex-col items-center justify-center gap-10">
      <div className="lg:w-[27%] md:w-[44%] w-[80%] text-center">
        <h1 className="h-[75px] md:text-6xl text-5xl md:mb-2 text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#ffffff_20%,#9855FF)] font-bold">
          Pricing
        </h1>
        <p className="text-white/80 md:text-lg text-lg leading-6 mb-4">
          Choose the right plan to meet your SEO needs and start optimizing
          today.
        </p>
        <span className="inline-flex items-center justify-center gap-3 w-[50%] px-2">
          <span className="w-[33px] h-5 rounded-[25px] relative bg-[#8C45FF]">
            <div className="absolute w-[18px] h-[18px] rounded-full top-1/2 left-0 -translate-y-1/2 bg-white"></div>
          </span>
          <h4 className="text-white">Billed Yearly</h4>
        </span>
      </div>
      <div className="relative lg:w-[90%] w-[100%] bg-black py-4 flex md:flex-row flex-col md:items-baseline items-center justify-center lg:gap-4 md:gap-2 gap-4">
        <div
          className="absolute inset-0 z-10 opacity-60 lg:bg-[radial-gradient(40%_50%_at_50%_45%,#8C45FF_10%,transparent)] md:bg-[radial-gradient(50%_50%_at_50%_45%,#8C45FF_10%,transparent)]
        bg-[radial-gradient(48%_40%_at_50%_45%,#8C45FF_10%,transparent)]
        "
        ></div>
        {pricingTiers.map(
          (
            { title, monthlyPrice, buttonText, popular, inverse, features },
            id
          ) => (
            <PricingCard
              key={id}
              title={title}
              monthlyPrice={monthlyPrice}
              buttonText={buttonText}
              features={features}
              inverse={inverse}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Pricing;
