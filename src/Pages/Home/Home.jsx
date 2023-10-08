import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Contact from "../Contact/Contact";

const Home = () => {

    return (
        <div className="max-w-7xl mx-auto">
          <Banner></Banner>
          <Services></Services>
          <Testimonials></Testimonials>
          <Contact></Contact>
        </div>

        
    );
};

export default Home;