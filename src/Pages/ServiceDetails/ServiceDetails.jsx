
import { useLoaderData, useNavigate, useParams } from "react-router-dom";



const ServiceDetails = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const services = useLoaderData();
    const serviceData = services.find(service=>service.id == id)
    console.log(id,serviceData);

   
    return (
        <div>
            <div className="relative mt-10" >
                <img src={serviceData.image} alt="" className="h-[80vh] "/>
                <div className="absolute top-0 h-full w-full bg-black/40 flex justify-end">
                    <div className="my-20 mx-10 w-2/5" data-aos='fade-left '>
                        <h1 className="border-b-2  pb-4 w-[460px] text-5xl font-bold text-black/80 mb-7">{serviceData.title}</h1>
                        <p className=' text-white'>{serviceData.description}</p>
                        <button onClick={()=>navigate('/')} className="btn btn-success normal-case mt-5 text-white">Go to Home</button>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default ServiceDetails;