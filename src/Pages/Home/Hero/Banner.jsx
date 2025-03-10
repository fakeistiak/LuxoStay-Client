
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData1 from "../../../assets/Animation/Animation - 1741539805401.json";
import animationData2 from "../../../assets/Animation/Animation - 1741539931818.json";
import animationData3 from "../../../assets/Animation/Animation - 1729.json";
import animationData5 from "../../../assets/Animation/Animation - 1741540184375.json";

const Banner = () => {
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const loadAnimationsData = async () => {
      const response = await fetch("/animation.json");
      const data = await response.json();
      setAnimations(data.animations);
    };
    loadAnimationsData();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-1 lg:gap-1 w-full h-full">
      {animations.map((animation) => {
        let animationData = null;
        switch (animation.id) {
          case "1":
            animationData = animationData1;
            break;
          case "2":
            animationData = animationData2;
            break;
          case "3":
            animationData = animationData3;
            break;
          case "4":
            animationData = animationData5;
            break;
          default:
            break;
        }

        return (
          <div
            key={animation.id}
            className="w-full h-full flex items-center justify-center"
          >
            {animationData && (
              <Lottie
                options={{
                  animationData,
                }}
                height="100%"
                width="100%"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Banner;