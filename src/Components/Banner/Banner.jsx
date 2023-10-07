import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='relative flex items-center md:h-auto h-[70vh] '>
          <AwesomeSlider className='md:h-[85vh] h-[50vh]'  bullets={false}>                              
              <div className='flex justify-center'>
                <img src="/birthday.jpg" alt="" className='opacity-30'/>
                <div className='absolute md:bottom-0 md:top-0 bottom-20 md:translate-y-64 translate-y-14 left-1/4'> 
                  <TypeAnimation
                  sequence={[`We Create,\n You Celebrate...`,900]} speed={40} 
                  style={{whiteSpace: 'pre-line'}} 
                  repeat={Infinity}
                  className=' text-lime-300 font-bold md:text-5xl text-2xl '
                  />
                  <p className='md:w-3/5 w-10/12  my-3 text-xs text-white md:tracking-widest'>Planning a Wedding,Proposal or Event in our busy city is not so easy,and it takes skills(and time) to make it all look easy-going</p>
                  <button className='mt-3 normal-case px-4 py-2 bg-lime-300 hover:bg-lime-400 duration-150 active:scale-90 font-medium'>Hire me</button>
                </div>
              </div>
              <div>
                <img src="/celebrate.jpg" alt="" className='md:h-auto h-[50vh] opacity-30'/>
                <div className='absolute md:bottom-0 md:top-0 bottom-20  md:translate-y-64 translate-y-14 left-1/4'>
                  <h1 className='text-lime-300 font-bold md:text-5xl text-2xl'>From Birthdays to Retirement,</h1>
                  <h1 className='font-bold md:text-5xl text-white'>{` We've Got You Covered`}</h1>
                  <p className='md:w-3/5 w-10/12 my-3 text-xs text-white tracking-widest'>Planning a Wedding,Proposal or Event in our busy city is not so easy,and it takes skills(and time) to make it all look easy-going</p>
                  <button className='mt-3 normal-case px-4 py-2 bg-lime-300 hover:bg-lime-400 duration-150 active:scale-90 font-medium'>Hire me</button>
                </div>
                </div>
              <div>
                <img src="/clean.jpg" alt="" className='opacity-30'/>
                <div className='absolute md:bottom-0 md:top-0 bottom-20 md:translate-y-64 translate-y-14 left-1/4'>
                  <h1 className='text-lime-300 font-bold md:text-5xl text-2xl'>From set up,</h1>
                  <h1 className='font-bold md:text-5xl text-white'>to <br/> clean up</h1>
                  <p className='md:w-3/5 w-10/12 my-3 text-xs text-white tracking-widest'>Planning a Wedding,Proposal or Event in our busy city is not so easy,and it takes skills(and time) to make it all look easy-going.</p>
                  <button className='mt-3 normal-case px-4 py-2 bg-lime-300 hover:bg-lime-400 duration-150 active:scale-90 font-medium'>Hire me</button>
                </div>
              </div>
          </AwesomeSlider>
          <div className='absolute w-full inset-0 md:bg-black h-full pointer-events-none'></div>
        </div>
    );
};

export default Banner;