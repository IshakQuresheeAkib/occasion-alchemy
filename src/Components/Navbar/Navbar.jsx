import {Link, NavLink, useNavigate } from "react-router-dom";
import { SiSkynet } from 'react-icons/si';
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";
import { HiMenuAlt1 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md'
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './navbar.css'

const Navbar = () => {

    const { loading,user,logOut } = useAuth();
    const [open,setOpen] = useState(false);
    const [profile,setProfile] = useState(false)
    const navigate = useNavigate();

    const handleLogging = () => {
        console.log(user,loading);
        user ?
        logOut()
        .then(()=>{
            toast.success('Log Out Successfully!')
        })
        .catch()
        :
        navigate('/login')
    }

    useEffect(()=>{
        AOS.init({
            duration:100,      
          });
    },[])

    return (           
        <nav className={`max-w-7xl mx-auto ${open || 'px-2'}`}>
            <div className="flex items-center justify-between mx-auto" >
                <div onClick={()=>navigate('/')} className={`my-2.5 cursor-pointer flex gap-4 ${open && 'hidden'}`}>
                    <SiSkynet className="text-5xl text-green-400"></SiSkynet>
                    <div>
                        <h3 className=" font-Festive text-4xl font-medium text-green-400">Occasion</h3>
                        <p className=" tracking-widest text-center font-normal text-xs">Alchemy</p>
                    </div>
                </div>
                <div className="flex md:gap-6 gap-1 items-start md:order-2">
                    {
                        user && <div className={` relative ${open && 'hidden'}`} >
                        <label onClick={()=>setProfile(!profile)} className="btn btn-ghost btn-circle avatar">
                            <div className="rounded-full">
                            <img src={user.photoURL} />
                            </div>
                        </label>
                        {
                            profile && <ul className={`mt-3 w-64 shadow menu bg-base-100 rounded-box duration-700 ${user && "absolute z-50 top-10 md:-left-0 right-0"}`} data-aos='zoom-in'>
                            <li><a> {user && user.displayName}</a></li>
                            <li><a>{user && user.email}</a></li>
                        </ul>
                        }
                    </div>  
                    }                   
                    <button onClick={()=>handleLogging()} className="btn btn-success normal-case text-white md:block hidden"> {loading ? '' : user ? 'Log Out' : 'Log in'}</button>
                    <div className={`md:hidden ${open && 'bg-green-400'}`}  >
                        <div className="text-2xl btn-ghost btn" onClick={()=>setOpen(!open)} >
                            {
                                open ? <MdOutlineClose className=""/>:<HiMenuAlt1/>
                            }
                        </div> 
                        {
                            open && <div className="text-white p-14 bg-green-400 h-screen w-screen" data-aos='fade-right'>
                            <div className="flex flex-col gap-10 text-xl w-24" onClick={()=>setOpen(!open)} >
                                <Link to="/">Home</Link>
                                {
                                    user && <>                                    
                                    <Link to="/about">About us</Link>
                                    <Link to="/features">Features</Link>
                                    </>
                                }
                                <Link to="/contact">Contact</Link>
                                <a><button onClick={()=>handleLogging()}> {loading ? '' : user ? 'Log Out' : 'Log in'}</button></a>
                            </div>
                        </div> 
                        }
                    </div>
                </div>
                <div className="hidden md:flex w-1/2 items-center justify-evenly md:order-1" id="navbar">                                      
                    <NavLink to="/" className="" >Home</NavLink>
                    {
                        user && <>
                            <NavLink to='/about' className="">About us</NavLink>
                            <NavLink to='/features' className="">Features</NavLink>                   
                        </>
                    }
                    <NavLink to="/contact" className="">Contact</NavLink>                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;