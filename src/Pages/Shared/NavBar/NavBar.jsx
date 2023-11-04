import { Link, NavLink } from "react-router-dom";

import { Button } from "@radix-ui/themes";
import useAuth from "../../../api/useAuth";

const NavBar = () => {
  // Initialize a state variable for the user's login status
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <nav className="px-5 h-14 flex items-center border-b justify-between">
      <h1>Logo</h1>
      <ul className="flex items-center gap-7">
        {navOptions.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "font-semibold text-black" : ""
            }
          >
            <li>{item.label}</li>
          </NavLink>
        ))}
      </ul>

      {user ? (
        <Button onClick={() => logOut()}> Logout</Button>
      ) : (
        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>
      )}
    </nav>
  );
};

const navOptions = [
  { label: "Home", path: "" },
  { label: "Rooms", path: "/rooms" },
  { label: "My Bookings", path: "/mybookings" },
];

export default NavBar;
