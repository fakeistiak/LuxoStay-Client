
import { useNavigate } from "react-router-dom";
import useAuth from "../../api/useAuth";
import Swal from "sweetalert2";

const Reviews = () => {
    const navigate = useNavigate();
    const {user}=useAuth();

  const handleSave = (e) => {
    e.preventDefault();
    const form =e.target;
    const message=form.message.value;
    const name=form.name.value;
    const email=form.email.defaultValue;
    console.log(message,name,email);
    const roomReview={
      name,
      email,
      message
    }
    fetch('http://localhost:5000/reviews',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(roomReview)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })

    Swal.fire({
      icon: "success",
      title: "Your Review Added Successfully",
      text: "Your review has been added to the review section!",
      showConfirmButton: true,
      timer: 3000,
    });
       navigate(location?.state ? location.state : "/myBookings");
  };
  
  return (
    <div>
      <h2 className="text-center font bold font-serif py-20  text-5xl pb-8">{}</h2>
      <section className="max-w-6xl p-20 mx-auto bg-white rounded-md shadow-2xl">
        <h2 className="text-4xl text-center font-semibold text-red-500 capitalize">
          Give us Your Review
        </h2>

        <form onSubmit={handleSave}>
          <div className="grid grid-cols-1 grid-rows-1 gap-6 mt-4">
            <div>
              <input
                placeholder="Your Email..."
                name="email"
                defaultValue={user?.email}
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                placeholder="Your Name..."
                name="name"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:border-black focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>
            <div>
              <textarea
                required
                name="message"
                placeholder="Your Message"
                className="block w-full py-4 px-4 mt-2 border border-black rounded-md  dark:border-gray-600 focus:border-black focus:ring-black focus:ring-opacity-40 dark:focus:border-black focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-md">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Reviews;
