import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
const Main = () => {
  return (
    <Theme accentColor="sky">
      <NavBar></NavBar>
      <div className="p-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </Theme>
  );
};

export default Main;