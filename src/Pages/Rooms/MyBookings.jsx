import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);
  const url = `http://localhost:5000/rooms?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default MyBookings;
