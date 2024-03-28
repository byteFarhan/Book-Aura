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
      <li className="">
        <RouteStyle routeName={"About Us"} routePath={"/about-us"} />
      </li>
    </>
  );
  return (
    <>
      <nav className="mt-5 navbar bg-base-100 mb-11">
        <div className="flex justify-between w-full md:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
          <a href="/" className="text-2xl font-bold">
            Book Aura
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="gap-3 px-1 menu menu-horizontal">{navItems}</ul>
        </div>
        <div className="hidden space-x-4 navbar-end md:flex">
          <a className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] hover:bg-[#59C6D2] text-white">
            Sign Up
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
