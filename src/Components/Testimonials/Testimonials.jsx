import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
AOS.init()

const Testimonials = () => {

    

    useEffect(()=>{
        AOS.init({
            duration:1500,
            easing:'ease-in-out-cubic',
            
          });
    },[])

    return (
        <div className="my-20 mx-10 ">
            <div className="text-center mx-auto">
                <h1 className=" font-bold text-3xl">Testimonials</h1>
                <hr className="bg-green-400 h-1 w-11 mx-auto mt-2"/>
                <p className="mt-3 text-xs text-gray-500">HAPPY CLIENTS ABOUT US</p>                
            </div>
            <div className='grid grid-cols-1 md:gap-0 gap-10  items-center place-items-center'>
                <div className="card md:w-96 bg-base-100 shadow-xl place-self-start" data-aos='zoom-in-up'>
                        <div className="card-body">
                            <p className='text-sm'>{`"The engagement party organized by Occasion Alchemy was an absolute hit. Their professionalism and expertise made the event stress-free for us. I highly recommend their services."`}</p>
                            <h2 className="font-semibold mb-0">Sarah Mitchell</h2>
                            <small>Marketing Manager at Acme Corporation.</small>
                        </div>
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl md:place-self-end" data-aos='zoom-in-up'>
                        <div className="card-body">
                            <p className='text-sm'>{`"I recently had the pleasure of working with Occasion Alchemy to organize my daughter's birthday party. The team's creativity and attention to detail were truly impressive. Our guests couldn't stop talking about it!"`}</p>
                            <h2 className="font-semibold mb-0">Michael Turner</h2>
                            <small>Retired Engineer from Global Solutions.</small>
                        </div>
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl place-self-start" data-aos='zoom-in-up'>
                        <div className="card-body">
                            <p className='text-sm'>{`"The baby shower organized by this team was pure magic! They thought of every detail, from the adorable decorations to the fun games. Our family will cherish those memories forever."`}</p>
                            <h2 className="font-semibold mb-0">Emily Foster</h2>
                            <small>IT Specialist at BrightTech Solutions.</small>
                        </div>
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl md:place-self-end" data-aos='zoom-in-up'>
                        <div className="card-body">
                            <p className='text-sm'>{`"I celebrated a retirement with an event planned by Occasion Alchemy, and it was spectacular. Their attention to detail and seamless execution made it a day I'll cherish forever."`}</p>
                            <h2 className="font-semibold mb-0">Daniel Rodriguez</h2>
                            <small>HR Director at Tech Innovators Inc.</small>
                        </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonials;