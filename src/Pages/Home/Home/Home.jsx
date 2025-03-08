
import DemoRooms from "../../Rooms/DemoRooms";
import Counter from "../Counter/Counter";
import Hero from "../Hero/Hero";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div>
            <Hero/>
            <Counter/>
            <DemoRooms/>
            <Team/>
        </div>
    );
};

export default Home;