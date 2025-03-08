import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "../../components/Container";

const imageUrls = [
  "https://i.ibb.co/G9ZKQYb/interior-bedroom-white-creamy-tones.jpg",
  "https://i.ibb.co/VDLj86t/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv.jpg",
  "https://i.ibb.co/y6J6ggh/interior-modern-comfortable-hotel-room.jpg",
  "https://i.ibb.co/0my0gQq/tidy-room-with-big-mirror.jpg",
  "https://i.ibb.co/G5mnDwz/modern-luxury-bedroom-suite-bathroom-with-working-table.jpg",
  "https://i.ibb.co/TmXBg6q/modern-beadroom-hotel.jpg",
  "https://i.ibb.co/0ChBXnq/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck.jpg",
];

const DemoRooms = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = imageUrls.map((url) => {
        const img = new Image();
        img.src = url;
        return new Promise((resolve) => {
          img.onload = resolve;
        });
      });
      await Promise.all(imagePromises);
      setIsImagesLoaded(true);
    };
    preloadImages();
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));

  return (
    <Container>
        <div className="text-center py-20">
      <h1 className="text-5xl text-center text-red-500 font-bold font-serif underline pt-4">
        Demo Rooms
      </h1>
      <p className="pb-10 pt-2">Some of our demo rooms with premium collections</p>

      <div className="relative h-[550px] w-full overflow-hidden">
        {isImagesLoaded ? (
          <motion.div
            className="absolute inset-0 w-full h-full"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={imageUrls[currentIndex]}
              alt={`Room ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        ) : (
          <div className="text-lg text-gray-500">Loading...</div>
        )}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
    </Container>
  );
};

export default DemoRooms;
