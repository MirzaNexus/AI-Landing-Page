const FeaturePro = ({ pro, display }) => {
  return (
    <div className="lg:h-[400px] h-[330px] flex-1 border-white/20 rounded-lg bg-[linear-gradient(to_bottom,#030106,#361764)] overflow-hidden lg:pl-14 pl-6 pt-6 relative md:order-none order-2">
      {display === true && (
        <div className="absolute lg:w-[40%] md:w-[60%] w-[80%] h-[86px] bottom-0 left-0 z-10 pl-4">
          <h4 className="text-white text-md">User-friendly dashboard</h4>
          <p className="text-white/60 w-[100%] text-md">
            Perform complex SEO audits and optimizations with a single click.
          </p>
        </div>
      )}

      {/* <div className="absolute inset-0 md:bg-[linear-gradient(to_bottom,#030106,#361764)] opacity-60"></div> */}
      <div
        className="aspect-video bg-cover md:h-[430px] h-[320px]  "
        style={{ backgroundImage: `url(${pro.src})` }}
      ></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#361764)] opacity-80"></div>
    </div>
  );
};

export default FeaturePro;
