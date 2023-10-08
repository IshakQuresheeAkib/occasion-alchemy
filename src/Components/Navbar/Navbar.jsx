import {  NavLink, useNavigate } from "react-router-dom";
import { SiSkynet } from 'react-icons/si';
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";
import { HiMenuAlt1 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md'
import { useState } from "react";

const Navbar = () => {

    const { loading,user,logOut } = useAuth();
    console.log(user,loading);
    const [open,setOpen] = useState(false);
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

    

    return (           
        <nav className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between mx-auto" >
                <div onClick={()=>navigate('/')} className="my-2.5 cursor-pointer flex gap-4" style={{display: open ? "none":'block'}}>
                    <SiSkynet className="text-5xl text-green-400"></SiSkynet>
                    <div>
                        <h3 className=" font-Festive text-4xl font-medium text-green-400">Occasion</h3>
                        <p className=" tracking-widest text-center font-normal text-xs">Alchemy</p>
                    </div>
                </div>
                <div className="flex gap-6 items-center md:order-2">
                    {
                        !open ? <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src="/icon.png" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mb-10">
                            <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> : ''
                    }
                    <button onClick={()=>handleLogging()} className="btn btn-success normal-case text-white" style={{display: open ? "none":'block'}}> {loading ? '' : user ? 'Log Out' : 'Log in'}</button>
                    <div onClick={()=>setOpen(!open)} className="md:hidden bg-green-400">
                        {
                            open ? <MdOutlineClose className="text-2xl "/>:<HiMenuAlt1 className="text-2xl"></HiMenuAlt1>
                        } 
                        <div className={` text-white font-semibold px-6 rounded-xl mb-20 py-4 duration-200 flex justify-center ${open?'bg-green-400 h-screen w-screen relative right-0':'-right-96 absolute'}`}>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Contact</li>
                            </ul>
                        </div>                       
                    </div>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <NavLink to="/" className="block py-2 pl-3 pr-4 text-white bg-green-400 rounded md:bg-transparent md:text-green-400 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                    </li>
                    <li>
                        <NavLink to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;