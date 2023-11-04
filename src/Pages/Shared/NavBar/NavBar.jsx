import { Link, NavLink } from "react-router-dom";
import { Avatar, Button, DropdownMenu } from "@radix-ui/themes";
import useAuth from "../../../api/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  return (
    <nav className="px-5 h-14 flex items-center border-b justify-between">
      <h1>Logo</h1>
      <ul className="flex items-center gap-7">
        {navOptions.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "text-gray-400 hover:text-gray-600 transition duration-200"
            }
          >
            <li>{item.label}</li>
          </NavLink>
        ))}
      </ul>

      {user ? (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar fallback="?" src={user?.photoURL} radius="full" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item disabled>{user?.email}</DropdownMenu.Item>
            <DropdownMenu.Item onClick={() => logOut()}>
              Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
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
