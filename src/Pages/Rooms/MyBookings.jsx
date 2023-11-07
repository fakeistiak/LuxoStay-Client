import React, { useEffect, useState } from "react";
import useAuth from "../../api/useAuth";
import axios from "axios";
import Loader from "../../components/Loader";
import { Avatar, Badge, Button, Flex, Table, Text } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UpdateModal from "../../components/UpdateModal";

const MyBookings = () => {
  const { user } = useAuth();
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = `http://localhost:5000/mybookings/${user?.email}`;
        const response = await axios.get(url);
        setRooms(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [user, setRefetch, refetch]);

  const handleDelete = (id, roomId) => {
    Swal.fire({
      title: "Are you sure you want to Cancel?",
      text: "This action cannot be undone.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((proceed) => {
      if (proceed.isConfirmed) {
        axios
          .patch(`http://localhost:5000/booking/${roomId}`, { isBooked: false })
          .then((res) => {
            console.log(res);
            fetch(`http://localhost:5000/mybookings/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.message === "Booking deleted successfully") {
                  Swal.fire({
                    title: "Canceled Successful",
                    icon: "success",
                  });
                  const remaining = rooms.filter((room) => room._id !== id);
                  setRooms(remaining);
                }
              })
              .catch((error) => {
                console.error("Error deleting booking:", error);
                Swal.fire({
                  title: "Delete Failed",
                  text: "An error occurred while deleting the booking.",
                  icon: "error",
                });
              });
          })
          .catch((err) => {
            console.log(err.message);
            Swal.fire({
              title: "Update Failed",
              text: "An error occurred while updating the booking status.",
              icon: "error",
            });
          });
      }
    });
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/mybookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = rooms.filter((booking) => booking._id !== id);
          const updated = rooms.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setRooms(newBookings);
        }
      })
      .catch((error) => {
        console.error("Error confirming booking:", error);
      });
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto py-10">
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {options.map((item) => (
              <Table.RowHeaderCell key={item.value}>
                {item.label}
              </Table.RowHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rooms?.map((room) => (
            <Table.Row key={room._id} className="">
              <Table.Cell>
                <Link to={"/rooms/" + room._id}>
                  <Avatar fallback="R" src={room?.roomImage} radius="full" />
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Text as="p">{room?.title}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text as="p">${room?.pricePerNight}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text as="p">
                  {room?.bookingDate
                    ? new Date(room.bookingDate).toLocaleDateString()
                    : "N/A"}
                </Text>
              </Table.Cell>
              <Table.Cell>
                <Flex gap="2">
                  {room.status === "confirm" ? (
                    <Badge color="blue">Confirmed</Badge>
                  ) : (
                    <>
                      <Button
                        onClick={() => handleDelete(room._id, room.roomId)}
                        variant="outline"
                      >
                        <Cross1Icon />
                      </Button>
                      <UpdateModal
                        date={room.bookingDate}
                        id={room._id}
                        setRefetch={setRefetch}
                      />
                      <Button
                        onClick={() => handleBookingConfirm(room._id)}
                        color="green"
                        variant="solid"
                        disabled={room.status === "confirm"}
                      >
                        Confirm
                      </Button>
                    </>
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

const options = [
  { label: "Image", value: "image" },
  { label: "Title", value: "title" },
  { label: "Price", value: "price" },
  { label: "Date", value: "date" },
  { label: "Action", value: "action" },
];

export default MyBookings;
