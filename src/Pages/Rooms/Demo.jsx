import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


const imageUrls = [
  "https://i.ibb.co/VDLj86t/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv.jpg",
  "https://i.ibb.co/y6J6ggh/interior-modern-comfortable-hotel-room.jpg",
  "https://i.ibb.co/0my0gQq/tidy-room-with-big-mirror.jpg",
  "https://i.ibb.co/G5mnDwz/modern-luxury-bedroom-suite-bathroom-with-working-table.jpg",
  "https://i.ibb.co/TmXBg6q/modern-beadroom-hotel.jpg",
  "https://i.ibb.co/0ChBXnq/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck.jpg",
  "https://i.ibb.co/G9ZKQYb/interior-bedroom-white-creamy-tones.jpg",
];

const Demo = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = imageUrls.map((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
        return new Promise((resolve) => {
          img.onload = resolve;
        });
      });

      await Promise.all(imagePromises);
      setIsImagesLoaded(true);
    };

    preloadImages();
  }, []);

  return (
      <>
    
      <div className="bg-white min-h-screen flex flex-col justify-between">
        <div className="flex-grow">
          {isImagesLoaded ? (
            <Marquee gradient={false} speed={80}>
              <div className="carousel h-[550px] w-[12000px] ">
                <ul className="list-none h-full flex p-0 m-0">
                  {imageUrls.map((imageUrl, index) => (
                    <li
                      key={index}
                      className="border-3 border-solid border-teal flex-shrink-0 animate-scrolling animate-linear animate-infinite duration-10000 w-1/5"
                    >
                      <img
                        src={imageUrl}
                        className="w-full h-full object-cover pr-4 rounded-lg "
                        alt={`Image ${index + 1}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Marquee>
          ) : (
            <div className="text-white text-center">Loading images...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Demo;
