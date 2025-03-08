import { FaHotel, FaUsers } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { MdHotel } from "react-icons/md";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import Container from "../../../components/Container";

const stats = [
  { icon: <FaHotel className="text-7xl text-rose-500" />, label: "Total Hotels", end: 80 },
  { icon: <FaUsers className="text-7xl text-rose-500" />, label: "Total Users", end: 100000 },
  { icon: <BsFillHouseFill className="text-7xl text-rose-500" />, label: "Rooms", end: 8000 },
  { icon: <MdHotel className="text-7xl text-rose-500" />, label: "Total Bookings", end: 250000 },
];

const Counter = () => {
  const [counterStart, setCounterStart] = useState(false);
  return (
    <Container>
      <ScrollTrigger onEnter={() => setCounterStart(true)}>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 py-28 place-items-center">
          {stats.map(({ icon, label, end }, i) => (
            <div key={i} className="shadow-2xl rounded-xl h-[250px] w-[250px] flex flex-col justify-center items-center p-6 gap-4">
              {icon}
              <h1 className="text-4xl font-bold text-rose-500">
                {counterStart && <CountUp delay={0.2} end={end} duration={1.5} />}+
              </h1>
              <h3 className="text-2xl font-serif font-bold text-rose-500">{label}</h3>
            </div>
          ))}
        </div>
      </ScrollTrigger>
    </Container>
  );
};

export default Counter;