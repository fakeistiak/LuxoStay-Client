import React, { useRef } from "react";
import Swal from "sweetalert2";

const NewsletterSignUp = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const numberRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here if needed

    // Show a success SweetAlert
    Swal.fire({
      icon: "success",
      title: "Subscription Successful",
      text: "You have successfully subscribed to our Newsletter!",
    });

    // Clear the input fields
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    numberRef.current.value = "";
  };

  return (
    <>
      <section className="max-full p-6 mx-auto bg-base-200 rounded-md shadow-md">
        <h2 className="text-3xl text-center font-semibold text-black pb-8">
          Subscribe to your newsletter for <br /> updates, deals, and exclusive
          offers
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-black font-medium">First Name</label>
              <input
                ref={firstNameRef}
                placeholder="First Name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus-border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus-border-blue-300 focus-outline-none focus-ring"
              />
            </div>

            <div>
              <label className="text-black font-medium">Last Name</label>
              <input
                ref={lastNameRef}
                placeholder="Last Name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus-border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus-border-blue-300 focus-outline-none focus-ring"
              />
            </div>

            <div>
              <label className="text-black font-medium">Email</label>
              <input
                ref={emailRef}
                placeholder="Email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus-border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus-border-blue-300 focus-outline-none focus-ring"
              />
            </div>

            <div>
              <label className="text-black font-medium">Number</label>
              <input
                ref={numberRef}
                placeholder="Number"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus-border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus-border-blue-300 focus-outline-none focus-ring"
              />
            </div>
          </div>

          <div className="flex justify-center w-full mt-6">
            <button className="btn bg-rose-500 w-full text-white hover:bg-red-600">
              Subscribe
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewsletterSignUp;
