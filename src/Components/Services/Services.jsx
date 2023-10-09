import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Services = () => {

    const navigate = useNavigate();
    const services = useLoaderData();
    console.log(services);

    return (
        <div className="md:my-28 my-16 text-center ">
            <div>
                <h1 className=" font-bold text-3xl">It’s simple! You have an event to plan and <br />
                <span className=" text-green-400 ">we have the solutions</span></h1>
                <hr className="bg-green-400 h-1 w-20 mx-auto mt-2"/>
                <p className="mt-3 text-xs text-gray-500">HERE IS HOW WE CAN HELP YOU</p>
            </div>
            <div className="flex flex-wrap gap-16 mt-20 text-left mx-auto justify-center">
                {   services ?
                    services.map(service=><div key={service.id} className="card w-96 bg-base-100 hover:shadow-2xl duration-500 border">
                    <figure>
                        <img src={service.image} alt={service.title} className=" h-64 w-full "/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{service.title}</h2>
                        <p className="text-xs ">{service.description}</p>
                        <p className="mb-5 font-semibold">Price: {service.price}</p>
                        <div className="card-actions ">
                        <button onClick={()=>navigate(`/serviceDetails/${service.id}`)} className="btn-sm text-xs bg-green-400 text-white normal-case hover:bg-green-500 active:scale-90 duration-150">{service.buttonText}</button>
                        </div>
                    </div>
                </div>):toast.error('no data found!')
                }

                
            </div>
        </div>
    );
};

export default Services;