import { NavLink } from "react-router-dom";
import "./NavigationPath.css";
const NavigationPath = ({ onClick, showFilter }) => {
  const hideFilter = (e) => showFilter && onClick(e);

  return (
    <ul className="NavigationPath">
      <li onClick={hideFilter}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>—</li>
      <li>
        <span>List of the coins</span>
      </li>
    </ul>
  );
};
export default NavigationPath;
