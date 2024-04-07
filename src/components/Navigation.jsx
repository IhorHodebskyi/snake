import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const isLoggedIn = "";

  return (
    <nav>
      <ul>
        <li>{isLoggedIn ? <NavLink to="/contacts">Contacts</NavLink> : <NavLink to="/">Home</NavLink>}</li>
      </ul>
    </nav>
  );
};
