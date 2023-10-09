import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='relative flex items-center md:h-auto h-[70vh] '>
          <AwesomeSlider className='md:h-[85vh] h-[50vh]' bullets={false} >                              
              <div className='flex justify-center'>
                <img src="/birthday.jpg" alt="" className='md:h-auto h-[50vh] opacity-30'/>
                <div className='absolute md:top-52 top-10 md:left-1/4 left-10'> 
                  <TypeAnimation
                  sequence={[`We Create,`,1000,]} 
                  cursor={false}
                  className='font-semibold text-white md:text-5xl text-3xl'
                  /> <br/>
                  <div className='md:mb-7 md:mt-3'>
                  <TypeAnimation
                  sequence={[`You Celebrate...`,1000,]} 
                  className=' text-lime-300 font-bold md:text-6xl text-3xl '
                  />
                  </div>
                  <p className='md:w-3/5 w-10/12  my-3 text-xs text-white md:tracking-widest'>Planning a Wedding,Proposal or Event in our busy city is not so easy,and it takes skills(and time) to make it all look easy-going</p>
                  <button className='md:mt-3 normal-case px-4 py-2 md:text-md text-xs bg-lime-300 hover:bg-lime-400 duration-150 active:scale-90 font-medium'>Get In Touch</button>
                </div>
              </div>
              <div>
                <img src="/celebrate.jpg" alt="" className='md:h-auto h-[50vh] opacity-30'/>
                <div className='absolute md:top-52 top-10 md:left-1/4 left-10'> 
                  <TypeAnimation
                  sequence={[`Where Every Event`,1000]}
                  cursor={false}
                  className='font-semibold text-white md:text-5xl text-3xl'
                  /> <br/>
                  <div className='md:mb-7 md:mt-3'>
                  <TypeAnimation
                  sequence={[`Shines Bright...`,1000]}
                  className=' text-lime-300 font-bold md:text-6xl text-3xl '
                  />
                  </div>
                  <p className='md:w-3/5 w-10/12 my-3 text-xs text-white md:tracking-widest'>Planning a Wedding,Proposal or Event in our busy city is not so easy,and it takes skills(and time) to make it all look easy-going</p>
                  <button className='md:mt-3 md:text-md text-xs normal-case px-4 py-2 bg-lime-300 hover:bg-lime-400 duration-150 active:scale-90 font-medium'>Get In Touch</button>
                </div>
              </div>
              <div>
                <img src="/clean.jpg" alt="" className='md:h-auto h-[50vh] opacity-30'/>
                <div className='absolute md:top-52 top-5 md:left-1/4 left-10'> 
                  <h1 className='font-semibold text-white md:text-5xl text-3xl'>From set up</h1>
                  <h1 className=' font-medium md:text-5xl text-white text-3xl' >to </h1> 
                  <TypeAnimation
                  sequence={[`clean up!`,1000,]} 
                  className=' text-lime-300 font-bold md:text-6xl text-3xl '
                  />      
                  <p className='md:w-3/5 w-10/12 my-3 text-xs text-white md:tracking-widest'>Planning a Wedding,Proposal or Event in our busy city is not so easy,and it takes skills(and time) to make it all look easy-going</p>
                  <button className='md:mt-3 md:text-md text-xs normal-case px-4 py-2 bg-lime-300 hover:bg-lime-400 duration-150 active:scale-90 font-medium'>Get In Touch</button>
                </div>
              </div>
          </AwesomeSlider>
          
          <div className='absolute w-full inset-0 md:bg-black h-full pointer-events-none'></div>
        </div>
    );
};

export default Banner;