import { Link } from "react-router-dom";
import errorImg from "../../assets/404-img.jpg";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen my-12 lg:h-2/3">
      <img
        src={errorImg}
        alt={`404 Page Not Found!`}
        className="max-w-sm mx-auto md:max-w-xl"
      />
      <Link to={"/"}>
        <button className="btn mx-auto text-white bg-[#23BE0A] hover:bg-[#23BE0A]">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
