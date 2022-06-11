const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center px-6">
      <div className="container mx-auto">
        <div className="mx-auto w-11/12 lg:w-9/12 xl:w-6/12">
          <h2 className="text-md lg:text-xl xl:text-2xl font-medium text-center text-gray-100 mb-6">
            Self-taught Front End Developer,
          </h2>
          <h1 className="text-4xl lg:text-6xl mx-auto leading-normal mb-10 text-center font-semibold text-gray-100">
            I build beautiful website with responsive design.
          </h1>
          <button className="block mx-auto text-white btn-call-to-action-p tracking-wider text-lg">
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
