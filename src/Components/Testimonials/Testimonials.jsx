import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
AOS.init()

const Testimonials = () => {

    useEffect(()=>{
        AOS.init({
            duration:2000,
            easing:'ease-in-out-quart'
          });
    },[])

    return (
        <div className="my-20 ">
            <div className="text-center mx-auto">
                <h1 className=" font-bold text-3xl">Testimonials</h1>
                <hr className="bg-green-400 h-1 w-11 mx-auto mt-2"/>
                <p className="mt-3 text-xs text-gray-500">HAPPY CLIENTS ABOUT US</p>                
            </div>
            <div className='grid grid-cols-1 items-center place-items-center'>
                <div className="card w-96 bg-base-100 shadow-xl place-self-start" data-aos='fade-right'>
                        <div className="card-body">
                            <p className='text-sm'>{`"The baby shower organized by this team was pure magic! They thought of every detail, from the adorable decorations to the fun games. Our family will cherish those memories forever."`}</p>
                            <h2 className="font-semibold ">Michael jane</h2>
                        </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl place-self-end" data-aos='fade-left'>
                        <div className="card-body">
                            <p className='text-sm'>{`"The baby shower organized by this team was pure magic! They thought of every detail, from the adorable decorations to the fun games. Our family will cherish those memories forever."`}</p>
                            <h2 className="font-semibold ">Michael jane</h2>
                        </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl place-self-start" data-aos='fade-right'>
                        <div className="card-body">
                            <p className='text-sm'>{`"The baby shower organized by this team was pure magic! They thought of every detail, from the adorable decorations to the fun games. Our family will cherish those memories forever."`}</p>
                            <h2 className="font-semibold ">Michael jane</h2>
                        </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl place-self-end" data-aos='fade-left'>
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