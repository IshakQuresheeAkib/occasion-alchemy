import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div className='font-Poppins'>
            <Navbar></Navbar>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer
            position="top-center"
            autoClose={2000}
            pauseOnFocusLoss={false}
            />
        </div>
    );
};

export default Root;