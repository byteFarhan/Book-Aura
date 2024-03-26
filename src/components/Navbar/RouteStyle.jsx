import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const RouteStyle = ({ routeName, routePath }) => {
  return (
    <NavLink
      to={routePath}
      className={({ isActive }) => (isActive ? "underline text-red-600" : "")}
    >
      {routeName}
    </NavLink>
  );
};

export default RouteStyle;
RouteStyle.propTypes = {
  routeName: PropTypes.string.isRequired,
  routePath: PropTypes.string.isRequired,
};
