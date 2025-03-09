import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../components/Container";

const DemoRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("/rooms.json");
        const data = await response.json();
        setRooms(data);
        preloadImages(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    const preloadImages = (images) => {
      const promises = images.map((room) => {
        const img = new Image();
        img.src = room.src;
        return new Promise((resolve) => (img.onload = resolve));
      });

      Promise.all(promises).then(() => setIsLoaded(true));
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    if (rooms.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % rooms.length);
      }, 2500); // 2.5 seconds interval

      return () => clearInterval(interval);
    }
  }, [rooms]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % rooms.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));

  return (
    <Container>
      <div className="text-center py-20 px-4">
        {/* <h1 className="text-5xl font-bold text-red-500 font-serif underline pt-4">
          Demo Rooms
        </h1> */}
        <h1 className="pb-8 pt-2 text-3xl font-poppins text-rose-500">
          Explore our premium demo rooms designed for your comfort.
        </h1>

        <div className="relative h-[500px]  overflow-hidden rounded-lg shadow-lg">
          {isLoaded ? (
            <AnimatePresence mode="wait">
              <motion.img
                key={rooms[currentIndex]?.id}
                src={rooms[currentIndex]?.src}
                alt={`Room ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{
                  duration: 2.5, // Adjusted for smoother transition
                  ease: "easeInOut", // Smooth easing for transition
                }}
              />
            </AnimatePresence>
          ) : (
            <div className="text-lg text-gray-500 flex items-center justify-center h-full">
              Loading...
            </div>
          )}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
          >
            &#10095;
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {rooms.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-red-500" : "bg-gray-400"
                } transition`}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DemoRooms;
