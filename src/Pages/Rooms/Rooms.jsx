import { Box, Card, Grid, Inset, Select, Strong, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Container from "../../components/Container";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("high");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setLoading(false);
      });
  }, []);

  const handleSortChange = (value) => {
    setSortOrder(value);

    const sortedRooms = [...rooms].sort((room1, room2) => {
      if (value === "high") {
        return room1.pricePerNight - room2.pricePerNight;
      } else if (value === "low") {
        return room2.pricePerNight - room1.pricePerNight;
      }
    });

    setRooms(sortedRooms);
  };
  const availableRooms = rooms.filter((room) => room.isBooked === false);
  if (loading) return <Loader />;

  return (
    <Container>
      <div>
        <h2 className="text-4xl text-red-500 text-center font-bold font-serif underline">
          Explore Our Rooms
        </h2>
        <div className="flex justify-center gap-4 pt-12">
          <input
            type="text"
            placeholder="Search rooms..."
            className="border rounded-lg p-2 w-80"
          />
          <button className="bg-red-500 text-white p-2 rounded w-32">
            Search
          </button>
        </div>

        <Box className="px-10 mt-6">
          <Select.Root onValueChange={handleSortChange} value={sortOrder}>
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="high">Price Low To High</Select.Item>
              <Select.Item value="low">Price High To Low</Select.Item>
            </Select.Content>
          </Select.Root>
          <Grid columns={{ initial: "1", md: "3" }} gap={"5"} className="mt-10">
            {rooms?.map((room) => (
              <Card key={room._id} size="2" style={{ maxWidth: 450 }}>
                <Inset
                  clip="padding-box"
                  side="top"
                  pb="current"
                  className="overflow-hidden"
                >
                  <Link to={"/rooms/" + room._id}>
                    <img
                      className="hover:scale-105 transition duration-150 cursor-pointer"
                      src={room.roomImage}
                      alt="Bold typography"
                      style={{
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                        height: 200,
                        backgroundColor: "var(--gray-5)",
                      }}
                    />
                  </Link>
                </Inset>
                <Text as="p" size="3">
                  <Strong>{room.title}</Strong>
                </Text>
                <Text as="p" size="3">
                  <span className="font-medium">Price</span>:{" "}
                  <Strong className="text-red-500">
                    ${room.pricePerNight}
                  </Strong>
                </Text>
              </Card>
            ))}
          </Grid>
        </Box>
      </div>
    </Container>
  );
};

export default Rooms;
