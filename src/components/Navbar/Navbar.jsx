import RouteStyle from "./RouteStyle";

const Navbar = () => {
  const navItems = (
    <>
      <li className="">
        <RouteStyle routeName={"Home"} routePath={"/"} />
      </li>
      <li className="">
        <RouteStyle routeName={"Listed Books"} routePath={"/listed-books"} />
      </li>
      <li className="">
        <RouteStyle routeName={"Pages to Read"} routePath={"/page-to-read"} />
      </li>
      <li className="">
        <RouteStyle routeName={"Blogs"} routePath={"/blogs"} />
      </li>
    </>
  );
  //   const navLinks = (
  //     <>
  //       <RouteStyle to={"/"}>Home</RouteStyle>
  //     </>
  //   );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="md:navbar-start flex justify-between w-full">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a href="/" className="font-bold text-2xl">
            Book Aura
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1">{navItems}</ul>
        </div>
        <div className="navbar-end space-x-4 hidden md:flex">
          <a className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] hover:bg-[#59C6D2] text-white">
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
