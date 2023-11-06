import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import useAuth from "../../api/useAuth";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const { user } = useAuth();
  const [refetch, setRefetch] = useState(false);
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [date, setDate] = useState("");
  const params = useParams();
  console.log(params);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/rooms/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setRoomData(data);
        setLoading(false);
      });
  }, [params.id, refetch]);

  console.log(roomData);

  if (loading) return <Loader />;

  const handleBooking = async (id) => {
    setSubmitting(true);
    axios
      .patch("http://localhost:5000/booking/" + id, { isBooked: true })
      .then((res) => console.log(res))

      .catch((err) => console.log(err.message));

    delete roomData._id;

    axios
      .post("http://localhost:5000/mybookings", {
        ...roomData,
        email: user.email,
        bookingDate: date,
        roomId: id,
      })
      .then((res) => {
        if (res.data.insertedId)
          Swal.fire("Congratulations!", "Booking successful", "success");
        setRefetch();
        setSubmitting(false);
      });
  };

  const {
    _id,
    roomImage,
    title,
    description,
    roomSize,
    pricePerNight,
    specialOffer,
    isBooked,
  } = roomData || {};
  return (
    <div className="max-w-6xl mx-auto space-y-3">
      <h1 className="text-3xl text-gray-600 ">{title}</h1>
      <img
        src={roomImage}
        className="w-full  h-[60vh] object-cover rounded-lg"
        alt=""
      />

      <div className="lg:flex justify-between ">
        {" "}
        <div className="space-y-3 max-w-lg  ">
          {specialOffer !== "N/A" && (
            <p className="font-medium text-gray-600 text-xl">
              Special Offer: {specialOffer}
            </p>
          )}
          <p className="text-lg font-medium">
            Price: <span className="text-red-500">${pricePerNight}</span>
          </p>
          <p className="text-gray-400">Room Size: {roomSize}</p>
          <p className="text-gray-400">{description}</p>
        </div>
        <form
          onSubmit={() => handleBooking(_id)}
          className="flex items-center flex-col gap-3"
        >
          <input
            onChange={(e) => setDate(e.target.value)}
            required
            type="date"
          />
          <Button disabled={isBooked || isSubmitting} size="4">
            Book Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RoomDetails;
