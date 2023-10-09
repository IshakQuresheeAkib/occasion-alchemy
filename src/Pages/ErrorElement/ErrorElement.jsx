import { useNavigate } from "react-router-dom";


const ErrorElement = () => {

    const navigate = useNavigate();

    return (
        <div className="relative">
            <div className="bg-[url(https://i.ibb.co/cDSWxRW/error.jpg)] md:bg-cover bg-contain w-screen h-screen bg-no-repeat ">
            <div className="absolute bg-black/70  w-full h-full">
                <button onClick={()=>navigate('/')} className="btn btn-success normal-case absolute bottom-10 mx-auto text-white flex justify-center items-center -translate-x-16 left-1/2 ">Back to Home</button>
            </div>
        </div>
        </div>
    );
};

export default ErrorElement;