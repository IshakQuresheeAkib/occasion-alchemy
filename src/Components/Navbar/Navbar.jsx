import {  NavLink, useNavigate } from "react-router-dom";
import { SiSkynet } from 'react-icons/si';
import useAuth from "../../Hook/useAuth";

const Navbar = () => {

    const { loading,user,logOut } = useAuth();
    console.log(user,loading);
    const navigate = useNavigate();

    const handleLogging = () => {
        console.log(user,loading);
        user ?
        logOut()
        .then(()=>console.log('done'))
        .catch()
        :
        navigate('/login')
    }

    return (           
        <nav className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between mx-auto">
                <div onClick={()=>navigate('/')} className="my-2.5 cursor-pointer flex gap-4">
                    <SiSkynet className="text-5xl text-green-400"></SiSkynet>
                    <div>
                        <h3 className=" font-Festive text-4xl font-medium text-green-400">Occasion</h3>
                        <p className=" tracking-widest text-center font-normal text-xs">Alchemy</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center md:order-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src="/icon.png" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <button onClick={()=>handleLogging()} className="btn btn-success normal-case text-white"> {loading ? '' : user ? 'Log Out' : 'Log in'}</button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <NavLink to="/" className="block py-2 pl-3 pr-4 text-white bg-green-400 rounded md:bg-transparent md:text-green-400 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register'>Register</NavLink>
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