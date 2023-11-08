import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
          Our Executive Team
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
          Our dedicated team of expert mechanics and technicians is committed to
          delivering top-notch car repairs and exceptional customer service
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent text-black group  hover:bg-rose-300 hover:text-white">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://i.ibb.co/T1CrXNH/377293658-3579268782389993-6785314108240355635-n.jpg"
            />
            <h1 className="mt-4 text-2xl font-semibold capitalize  group-hover:text-white">
              Istiak Ahmed
            </h1>
            <p className="mt-2 capitalize  group-hover:text-white">
              CTO
            </p>
            <div className="flex mt-3 -mx-2">
              <Link className="flex text-xl justify-evenly gap-4">
                <BsFacebook></BsFacebook>
                <BsInstagram></BsInstagram>
                <BsLinkedin></BsLinkedin>
                <BsTwitter></BsTwitter>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:text-white hover:bg-rose-300">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://i.ibb.co/Fb4XxRG/372664293-315690377646570-3068861529109295562-n.jpg"
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">
              Tanvir Ahmed
            </h1>
            <p className="mt-2 text-gray-500 capitalize  group-hover:text-white">
              CEO
            </p>
            <div className="flex mt-3 -mx-2">
              <Link className="flex justify-evenly text-xl gap-4 ">
                <BsFacebook></BsFacebook>
                <BsInstagram></BsInstagram>
                <BsLinkedin></BsLinkedin>
                <BsTwitter></BsTwitter>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group  hover:text-white hover:bg-rose-300">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://i.ibb.co/SVL89Qx/385540788-875874374256098-2515480324312207432-n.jpg"
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">
              Naimur Reza
            </h1>
            <p className="mt-2 text-gray-500 capitalize  group-hover:text-white">
              Full Stack Developer
            </p>
            <div className="flex mt-3 -mx-2">
              <Link className="flex justify-evenly text-xl gap-4">
                <BsFacebook></BsFacebook>
                <BsInstagram></BsInstagram>
                <BsLinkedin></BsLinkedin>
                <BsTwitter></BsTwitter>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group  hover:text-white hover:bg-rose-300">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://i.ibb.co/bXKMYKq/394524330-340807298531481-4805289555787555861-n.jpg"
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">
              John Doe
            </h1>
            <p className="mt-2 text-gray-500 capitalize  group-hover:text-white">
             Lead Designer
            </p>
            <div className="flex mt-3 -mx-2">
              <Link className="flex justify-evenly text-xl gap-4">
                <BsFacebook></BsFacebook>
                <BsInstagram></BsInstagram>
                <BsLinkedin></BsLinkedin>
                <BsTwitter></BsTwitter>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
