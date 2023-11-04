import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const RoomDetails = () => {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(false);
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
  }, [params.id]);

  console.log(roomData);

  if (loading) return <h1>Loading..</h1>;

  const handleBooking = async (id) => {
    axios
      .patch("http://localhost:5000/booking/" + id)
      .then((res) => console.log(res))

      .catch((err) => console.log(err.message));
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

      <div className="flex justify-between">
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
        <div className="flex items-center flex-col gap-3">
          <input type="date" />
          <Button
            disabled={isBooked}
            onClick={() => handleBooking(_id)}
            size="4"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
