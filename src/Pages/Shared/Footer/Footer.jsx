import { BsFacebook,BsTwitter,BsInstagram,BsYoutube } from "react-icons/bs";
import { FaSlackHash } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-black">
      <aside>
        <FaSlackHash className="text-7xl"></FaSlackHash>
        <p className="font-bold">
          Luxo<span className="text-red-500">Stay</span> Industries Ltd. <br />
          Providing reliable rooms since 1992
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col text-3xl gap-4 cursor-pointer">
          <BsFacebook className="text-blue-600"></BsFacebook>
          <BsInstagram className="text-rose-500"></BsInstagram>
          <BsYoutube className="text-red-500"></BsYoutube>
          <BsTwitter className="text-sky-500"></BsTwitter>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
