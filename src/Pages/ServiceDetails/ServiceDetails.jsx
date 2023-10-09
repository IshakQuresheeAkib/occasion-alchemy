
import { useLoaderData, useNavigate, useParams } from "react-router-dom";



const ServiceDetails = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const services = useLoaderData();
    const serviceData = services.find(service=>service.id == id)
    console.log(id,serviceData);

   
    return (
        <div>
            <div className="relative mt-10 mx-5" data-aos='zoom-in'>
                <div className="relative md:w-3/5 mx-auto">
                    <img src={serviceData.image} alt="" className=""/>
                    <div className="absolute top-0 h-full w-full bg-black/40 flex justify-end"></div>
                </div>
                <div className="my-16 mx-auto md:w-3/5 text-justify">
                    <h1 className="border-b-2 pb-4 md:text-5xl text-4xl font-bold text-black/80 mb-7">{serviceData.title}</h1>
                    <p >{serviceData.description}</p>
                    <button onClick={()=>navigate('/')} className="btn btn-success normal-case mt-5 text-white">Go to Home</button>
                </div>               
            </div>            
        </div>
    );
};

export default ServiceDetails;