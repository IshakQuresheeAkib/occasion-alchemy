import './details.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Features = () => {


    useEffect(()=>{
        AOS.init({
            duration:1000,      
          });
    },[])


    return (
        <div className="h-screen">
            <div className="bg-[url(/event.jpg)] h-[90vh] bg-cover bg-no-repeat" data-aos='zoom-in' >
                <div className='absolute bg-black/70 top-0 w-full h-full'>
                    <div className='flex flex-col justify-center items-center h-screen w-1/2 mx-auto '>
                        <h1 className="text-white text-5xl font-bold border-b-2 border-green-400">What we offer</h1>
                        <ul className="text-white flex flex-wrap justify-center gap-7 mt-7 features ">
                            <li>Personalized Event Planning</li>
                            <li>Theme Selection</li>
                            <li>Decor and Design</li>
                            <li>Vendor Coordination</li>
                            <li>Venue Selection</li>
                            <li>Event Photography and Videography</li>
                            <li>Invitation Design</li>
                            <li>Post-Event Cleanup</li>
                            <li>Audiovisual Services</li>
                            <li>Transportation Coordination</li>
                            <li>Interactive Games and Activities</li>
                            <li>Catering and Menu Planning</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;