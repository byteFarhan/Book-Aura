import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* navBar */}
      <Outlet />
      {/* footer */}
    </>
  );
};

export default MainLayout;
