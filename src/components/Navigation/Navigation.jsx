import * as SC from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <SC.NavList>
        <li>
          <SC.NavLink to="/">Home</SC.NavLink>
        </li>
        <li>
          <SC.NavLink to="/teachers">Teachers</SC.NavLink>
        </li>
        <li>
          <SC.NavLink to="/favorites">Favorites</SC.NavLink>
        </li>
      </SC.NavList>
    </nav>
  );
};
