import { Parallax } from "@react-spring/parallax";

const Hero = () => {
  return (
    <div>
      <Parallax pages>
        <section
          className="hero relative text-white py-56"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/rft028M/patrick-robert-doyle-AH8z-KXq-FITA-unsplash.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto pl-8">
            <h1 className="text-5xl font-bold mb-4 font-serif">
              Where Comfort Meets <br /> Convenience
            </h1>
            <p className="text-lg mb-8">
              Elevate your travel experience with our vast selection of
              handpicked <br />
              rooms. Your next journey begins with a simple click
            </p>
            <a
              href="#"
              className="btn bg-rose-600 hover:bg-rose-700 text-white"
            >
              Learn More
            </a>
          </div>
        </section>
      </Parallax>
    </div>
  );
};

export default Hero;
