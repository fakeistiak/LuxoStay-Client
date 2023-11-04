import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const birth = form.get("birth");
    const password = form.get("password");
    console.log(email, password, name, photo, birth);

    // if (
    //   password.length < 6 ||
    //   !/[A-Z]/.test(password) ||
    //   !/[!@#$%^&*]/.test(password)
    // ) {
    //   toast.error(
    //     "Password must be at least 6 characters long, contain a capital letter, and a special character."
    //   );
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        updateUser({ name, photo }).then(
          console.log(result.user),
          toast.success("Sign up Successful"),
          navigate("/"),

          window.location.reload()
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-white dark:bg-gray-600">
      <div className="flex justify-center h-[600px]">
        <div className="hidden bg-cover lg:block lg:w-2/3">
          <img
            className="h-[600px]"
            src="https://i.ibb.co/fDHTBdk/white-notebook-black-data-firewall-1.jpg"
          />
        </div>
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h1 className="text-4xl font-serif font-bold text-white">
                Sign Up Please
              </h1>
              <p className="mt-3 text-white">Sign Up to access your account</p>
            </div>
            <div className="mt-8">
              <form onSubmit={handleRegister}>
                <div>
                  <p className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Name
                  </p>
                  <input
                    type="name"
                    name="name"
                    placeholder="Your Name"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-2">
                  <p className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email
                  </p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your E-mail"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-2">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                      Password
                    </p>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <button
                    className="btn w-full bg-black text-white hover:bg-gray-600"
                    type="submit"
                    value="Sign Up"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <p className="mt-6 text-sm text-center text-gray-400">
                Already have an account?
                <Link
                  to="/login"
                  href="#"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
