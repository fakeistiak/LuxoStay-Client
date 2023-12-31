import { Link, NavLink } from "react-router-dom";
import { Avatar, Button, DropdownMenu } from "@radix-ui/themes";
import useAuth from "../../../api/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  return (
    <nav className="px-5 h-14 flex items-center border-b justify-between">
      <h1 className="lg:text-4xl font-bold font-serif">Luxo<span className="text-red-500">Stay</span></h1>
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
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={
                user?.photoURL ||
                "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
              }
              alt="User Avatar"
            />
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
  { label: "Home", path: ""},
  { label: "Rooms", path: "/rooms" },
  { label: "My Bookings", path: "/mybookings" },
];

export default NavBar;
