import { useEffect, useState } from "react";
import useAuth from "../../api/useAuth";
import axios from "axios";
import Loader from "../../components/Loader";
import { Avatar, Button, Flex, Table, Text } from "@radix-ui/themes";
import { Cross1Icon, Pencil2Icon } from "@radix-ui/react-icons";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useAuth();
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
  }, [user]);

  const handleDelete = (id, roomId) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "This action cannot be undone.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((proceed) => {
      if (proceed) {
        // First, update the booking status using Axios
        axios
          .patch(`http://localhost:5000/booking/${roomId}`, { isBooked: false })
          .then((res) => {
            console.log(res);
            // After successfully updating the booking status, proceed with deleting the booking from the state and show a success message.
            fetch(`http://localhost:5000/mybookings/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.message === "Booking deleted successfully") {
                  Swal.fire({
                    title: "Deleted Successful",
                    icon: "success",
                  });

                  // Remove the deleted booking from the state
                  const remaining = rooms.filter((room) => room._id !== id);
                  setRooms(remaining);
                } else {
                  Swal.fire({
                    title: "Delete Failed",
                    text: "The booking could not be deleted.",
                    icon: "error",
                  });
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
            <Table.Row key={room._id}>
              <Table.Cell>
                <Avatar fallback="R" src={room?.roomImage} radius="full" />
              </Table.Cell>
              <Table.Cell>
                <Text as="p"> {room?.title}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text as="p"> ${room?.pricePerNight}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text as="p"> {new Date().toLocaleDateString()}</Text>
              </Table.Cell>
              <Table.Cell>
                <Flex gap="2">
                  <Button color="indigo">
                    <Pencil2Icon />
                  </Button>
                  <Button
                    onClick={() => handleDelete(room._id, room.roomId)}
                    variant="outline"
                  >
                    <Cross1Icon />
                  </Button>
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
