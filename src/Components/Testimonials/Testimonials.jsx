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
                            <p className='text-sm'>{`"The baby shower organized by this team was pure magic! They thought of every detail, from the adorable decorations to the fun games. Our family will cherish those memories forever."`}</p>
                            <h2 className="font-semibold ">Michael jane</h2>
                        </div>
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl md:place-self-end" data-aos='zoom-in-down'>
                        <div className="card-body">
                            <p className='text-sm'>{`"The baby shower organized by this team was pure magic! They thought of every detail, from the adorable decorations to the fun games. Our family will cherish those memories forever."`}</p>
                            <h2 className="font-semibold ">Michael jane</h2>
                        </div>
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl place-self-start" data-aos='zoom-in-up'>
                        <div className="card-body">
                            <p className='text-sm'>{`"The baby shower organized by this team was pure magic! They thought of every detail, from the adorable decorations to the fun games. Our family will cherish those memories forever."`}</p>
                            <h2 className="font-semibold ">Michael jane</h2>
                        </div>
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl md:place-self-end" data-aos='zoom-in-down'>
                        <div className="card-body">
                            <p className='text-sm'>{`"The baby shower organized by this team was pure magic! They thought of every detail, from the adorable decorations to the fun games. Our family will cherish those memories forever."`}</p>
                            <h2 className="font-semibold ">Michael jane</h2>
                        </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonials;