import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// const RouteStyle = ({ children, to, ...props }) => {
//   return (
//     <li
//       className={
//         props.isActive
//           ? "border-[#23BE0A] text-[#23BE0A]"
//           : "border-transparent hover:border-[#23BE0A] hover:text-[#23BE0A] px-4 py-2"
//       }
//     >
//       <NavLink to={to} {...props}>
//         {children}
//       </NavLink>
//     </li>
//   );
// };
const RouteStyle = ({ routeName, routePath }) => {
  return (
    <NavLink
      to={routePath}
      className={({ isActive }) =>
        isActive ? "text-[#23BE0A] underline font-semibold" : ""
      }
    >
      <p>{routeName}</p>
    </NavLink>
  );
};

export default RouteStyle;
RouteStyle.propTypes = {
  routeName: PropTypes.string.isRequired,
  routePath: PropTypes.string.isRequired,
};
