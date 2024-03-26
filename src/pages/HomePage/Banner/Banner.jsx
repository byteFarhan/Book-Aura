// import bannerImg from "../../../assets/";
const Banner = () => {
  return (
    <>
      <section
        id="banner"
        className="hero bg-base-200 p-10 lg:px-28 lg:py-20 rounded-3xl mt-12"
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src="./banner-img.png"
            className="max-w-sm rounded-lg mix-blend-multiply h-[250px] md:h-[400px] w-auto"
          />
          <div className="space-y-5 lg:space-y-10">
            <h1 className="text-3xl lg:text-[56px] font-bold">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white">
              View The List
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
