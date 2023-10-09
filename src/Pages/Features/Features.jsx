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
        <div className="">
            <div className="bg-[url(/event.jpg)] md:h-[90vh] md:min-h-0 min-h-screen bg-cover bg-no-repeat" data-aos='zoom-in' >
                <div className='absolute bg-black/70 top-0 w-full h-full backdrop-blur-sm'>
                    <div className='flex flex-col justify-center items-center h-screen md:w-1/2 mx-auto '>
                        <h1 className="text-white md:text-5xl text-4xl font-bold border-b-2 border-green-400">What we offer</h1>
                        <ul className="text-white features flex flex-wrap justify-center md:gap-7 gap-4 mt-7 md:text-base text-sm">
                            <li className=''>⦿ Personalized Event Planning</li>
                            <li>⦿ Theme Selection</li>
                            <li>⦿ Decor and Design</li>
                            <li>⦿ Vendor Coordination</li>
                            <li>⦿ Venue Selection</li>
                            <li>⦿ Event Photography and Videography</li>
                            <li>⦿ Invitation Design</li>
                            <li>⦿ Post-Event Cleanup</li>
                            <li>⦿ Audiovisual Services</li>
                            <li>⦿ Transportation Coordination</li>
                            <li>⦿ Interactive Games and Activities</li>
                            <li>⦿ Catering and Menu Planning</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;