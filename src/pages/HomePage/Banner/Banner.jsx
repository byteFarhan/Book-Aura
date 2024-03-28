import { Link } from "react-router-dom";

// import bannerImg from "../../../assets/";
const Banner = () => {
  return (
    <>
      <section
        id="banner"
        className="p-10 hero bg-base-200 lg:px-28 lg:py-20 rounded-3xl"
      >
        <div className="flex-col gap-10 hero-content lg:flex-row-reverse">
          <img
            src="./banner-img.png"
            className="max-w-sm rounded-lg mix-blend-multiply h-[250px] md:h-[400px] w-auto"
          />
          <div className="space-y-5 lg:space-y-10">
            <h1 className="text-3xl lg:text-5xl lg:leading-normal font-work-sans">
              Books to freshen up your bookshelf
            </h1>

            <Link to={"/listed-books"}>
              <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
