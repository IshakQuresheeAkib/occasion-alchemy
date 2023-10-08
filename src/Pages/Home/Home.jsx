import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Contact from "../Contact/Contact";

const Home = () => {

    return (
        <div>
          <div className="max-w-7xl mx-auto">
          <Banner></Banner>
          <Services></Services>
          <Testimonials></Testimonials>
          <Contact></Contact>
        </div>
          <Footer></Footer>
        </div>
        
    );
};

export default Home;