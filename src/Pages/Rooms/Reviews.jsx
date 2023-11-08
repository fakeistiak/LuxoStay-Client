import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Reviews = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    howDidYouKnow: "",
    serviceRating: "",
    interestedInComingAgain: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSave = (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
      rating: "",
      howDidYouKnow: "",
      serviceRating: "",
      interestedInComingAgain: "",
      message: "",
    });
    Swal.fire({
      icon: "success",
      title: "Your Review Added Successfully",
      text: "Your review has been added to the review section!",
      showConfirmButton: true,
      timer: 3000,
    });
       navigate(location?.state ? location.state : "/myBookings");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    const {
      name,
      email,
      rating,
      howDidYouKnow,
      serviceRating,
      interestedInComingAgain,
      message,
    } = formData;
    const isValid =
      name &&
      email &&
      rating &&
      howDidYouKnow &&
      serviceRating &&
      interestedInComingAgain &&
      message;
    setIsFormValid(isValid);
  }, [formData]);

  return (
    <div>
      <h2 className="text-center font bold font-serif  text-5xl pb-8">{}</h2>
      <section className="max-w-6xl p-20 mx-auto bg-white rounded-md shadow-2xl">
        <h2 className="text-4xl text-center font-semibold text-red-500 capitalize">
          Give us Your Review
        </h2>

        <form onSubmit={handleSave}>
          <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
            <div>
              <input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>
            <div>
              <select
                required
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              >
                <option value="">Ratings</option>
                <option value="option1">2</option>
                <option value="option2">2</option>
                <option value="option3">3</option>
                <option value="option3">4</option>
                <option value="option3">5</option>
              </select>
            </div>

            <div>
              <select
                required
                name="howDidYouKnow"
                value={formData.howDidYouKnow}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              >
                <option value="">How did you know About us?</option>
                <option value="option1">Friends</option>
                <option value="option2">Social Media</option>
                <option value="option3">Advertisements</option>
                <option value="option3">By Yourself</option>
              </select>
            </div>
            <div>
              <select
                required
                name="serviceRating"
                value={formData.serviceRating}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              >
                <option value="">How was our service</option>
                <option value="option1">Excellent</option>
                <option value="option1">Very Good</option>
                <option value="option2">Good</option>
                <option value="option3">Average</option>
                <option value="option3">Bad</option>
              </select>
            </div>
            <div>
              <select
                required
                name="interestedInComingAgain"
                value={formData.interestedInComingAgain}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              >
                <option value="">Are you interested in coming again</option>
                <option value="option1">Sure</option>
                <option value="option2">Maybe</option>
                <option value="option3">Not Sure</option>
                <option value="option3">Not interested</option>
                <option value="option3">No</option>
              </select>
            </div>
            <div>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="block w-full py-4 px-4 mt-2 border border-black rounded-md  dark:border-gray-600 focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              
              type="onsubmit"
              className={`btn w-full ${
                isFormValid
                  ? "bg-red-500 hover:bg-red-700 text-white"
                  : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Reviews;
