
import { Link } from "react-router-dom";
import Container from "../../../components/Container";

const Hero = () => {
  return (
    <Container>
      <section
      className="relative text-white py-52 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/gLGw96pF/Screenshot-2025-03-08-201800-1.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container mx-auto pl-8">
        <h1 className="text-5xl font-bold mb-4 font-serif">
          Where Comfort Meets <br /> Convenience
        </h1>
        <p className="text-lg mb-8">
          Elevate your travel experience with our vast selection of handpicked
          <br />
          rooms. Your next journey begins with a simple click
        </p>
        <Link
          to="/blog"
          className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-md"
        >
          Learn More
        </Link>
      </div>
    </section>
    </Container>
  );
};

export default Hero;
