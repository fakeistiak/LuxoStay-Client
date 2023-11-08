import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import useAuth from "../../api/useAuth";
import axios from "axios";
import { Button } from "@radix-ui/themes";
import Demo from "./Demo";
// import Reviews from "./Reviews";

const RoomDetails = () => {
  const { user } = useAuth();
  const [refetch, setRefetch] = useState(false);
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [date, setDate] = useState("");
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/rooms/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setRoomData(data);
        setLoading(false);
      });
  }, [params.id, refetch]);

  const handleBooking = async (id) => {
    if (!roomData.isBooked) {
      setSubmitting(true);
      axios
        .patch(`http://localhost:5000/booking/${id}`, { isBooked: true })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });

      delete roomData._id;

      axios
        .post("http://localhost:5000/mybookings", {
          ...roomData,
          email: user.email,
          bookingDate: date,
          roomId: id,
        })
        .then((res) => {
          console.log(res)
          if (res.data.insertedId) {
            Swal.fire("Congratulations!", "Booking successful", "success");
            setRefetch(!refetch);
          }
          setSubmitting(false);
        });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl text-red-500 font-serif font-bold pb-10 text-center underline">
        {roomData.title}
      </h1>
      <div className="lg:flex pb-12">
        <div className="w-full lg:w-2/3 pr-4">
          {loading ? (
            <Loader />
          ) : (
            <>
              <img
                src={roomData.roomImage}
                className="w-full h-[60vh] object-cover rounded-lg"
                alt=""
              />
            </>
          )}
          <form
            onSubmit={(e) => {
              handleBooking(roomData._id);
              e.preventDefault();
            }}
            className=" flex-col gap-3"
          >
            <input
              onChange={(e) => setDate(e.target.value)}
              required
              type="date"
            />{" "}
            <br />
            <Button
              className="w-full"
              disabled={roomData.isBooked || isSubmitting}
              size="4"
            >
              Book Now
            </Button>
          </form>
        </div>
        <div className="w-full lg:w-1/3 lg:pt-8 lg:pl-4">
          <div className="space-y-3 max-w-lg">
            {roomData.specialOffer !== "N/A" && (
              <p className="font-medium text-red-500 text-2xl">
                {" "}
                Special Offer:{" "}
                <span className="text-black"> {roomData.specialOffer}</span>
              </p>
            )}
            <p className="text-xl font-medium">
              Price:{" "}
              <span className="text-red-500">${roomData.pricePerNight}</span>
            </p>
            <p className="text-black text-lg font-medium">
              Room Size: {roomData.roomSize}
            </p>
            <p className="text-black text-md">{roomData.description}</p>
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <br />
            <Link
              to="/reviews"
              className="btn bg-black text-white hover:bg-gray-600"
            >
              Give a Review
            </Link>
          </div>
        </div>
      </div>
      <h1 className=" text-center text-red-500 font-bold font-serif underline text-4xl">
        Related Rooms
      </h1>
      <p className="text-center text-sm p-4">
        Discover our recommended rooms to find the perfect accommodation <br />{" "}
        for your stay, tailored to your needs and preferences
      </p>
      <Demo></Demo>
      <h1 className="text-red-500 text-lg font-semibold lg:relative lg:bottom-12">
        Premium Rooms:{" "}
        <span className="text-md text-black">
          These are the premium collection that we provide
        </span>
      </h1>
      <p className="lg:relative lg:bottom-40">
        Experience the epitome of comfort and style with our meticulously
        curated rooms. From deluxe suites to cozy singles, our diverse selection
        ensures a perfect stay for every traveler. Immerse yourself in luxurious
        amenities and personalized spaces, all designed to make your journey
        unforgettable. Your ideal room is just a click away.
      </p>
      <h1 className="text-black text-lg font-semibold lg:relative lg:bottom-40">
        Prize Range: <span className=" text-red-500">800$-1500$</span>
      </h1>
      <Link
        to="/newsLetter"
        className="btn bg-red-500 text-white hover:text-red-700 lg:relative lg:bottom-24"
      >
        Subscribe
      </Link>
    </div>
  );
};

export default RoomDetails;
