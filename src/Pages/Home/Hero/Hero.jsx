import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import AnimationGrid from "../../Home/Hero/AnimationGrid";


const Hero = () => {
  return (
    <Container>
      <section className="w-full py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="relative container mx-auto px-4 md:pl-8">
          <h1 className="text-4xl md:text-5xl font-poppins mb-4">
            Where Comfort Meets <br /> Convenience
          </h1>
          <p className="text-base md:text-lg mb-8">
            Elevate your travel experience with our vast selection of handpicked
            <br />
            rooms. Your next journey begins with a simple click.
          </p>
          <Link
            to="/blog"
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-md"
          >
            Learn More
          </Link>
        </div>
        <div className="w-full h-[300px] md:h-[500px]">
          <AnimationGrid />
        </div>
      </section>
    </Container>
  );
};

export default Hero;