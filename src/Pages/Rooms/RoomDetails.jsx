import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const RoomDetails = () => {
  const [roomData, setRoomData] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(`http://localhost:5000/rooms/${params.id}`)
      .then((res) => res.json())
      .then((data) => setRoomData(data));
  }, [params.id]);

  console.log(roomData);

  return <div>tuba</div>;
};

export default RoomDetails;
