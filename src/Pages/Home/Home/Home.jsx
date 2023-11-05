import Blog from "../Blog/Blog";
import Hero from "../Hero/Hero";
import NewsletterSignUp from "../NewsletterSignup/NewsletterSignup";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <SpecialOffers></SpecialOffers>
            <Blog></Blog>
            <Testimonials></Testimonials>
            <NewsletterSignUp></NewsletterSignUp>
        </div>
    );
};

export default Home;