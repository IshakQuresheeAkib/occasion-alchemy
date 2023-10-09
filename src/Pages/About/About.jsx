
const About = () => {
    return (
        <div>
            <div className="text-center my-20 mx-5">
                <h1 className="text-4xl font-bold text-green-400">Meet With Our Team</h1>
                <p className="md:w-1/2 text-sm mx-auto mt-3">Our passionate team of event experts is dedicated to bringing your vision to life. With diverse skills and a shared commitment to creating unforgettable experiences, we collaborate seamlessly to ensure every detail of your event is perfectly orchestrated. Get to know the faces behind the magic that transforms your dreams into reality.</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 place-items-center">
                <div className="card card-body">
                    <img src="https://i.ibb.co/7kyQQFM/126500fe0124ac23184733631311a153.jpg" alt="" className="w-96 "/>
                    <h3 className="font-medium text-2xl">John Smith</h3>
                    <p>Founder | Interior Designer</p>
                </div>
                <div className="card card-body">
                    <img src="https://i.ibb.co/rQtPjQV/52fc4e1cd6ca45524a376c0074e685a7.jpg" alt="" className="w-96 "/>
                    <h3 className="font-medium text-2xl">Richard Turner</h3>
                    <p>Certified Wedding Specialist | Event Coordinator </p>
                </div>
                <div className="card card-body">
                    <img src="https://i.ibb.co/7rCJV48/foto-sushi-6anudmp-ILw4-unsplash.jpg" alt="" className="w-96 "/>
                    <h3 className="font-medium text-2xl">Steven Adams</h3>
                    <p>Venue Management Professional (VMP)</p>
                </div>
                <div className="card card-body">
                    <img src="https://i.ibb.co/DKvS3vh/37d56efbd814dda56c284d562fa3afc2.jpg" alt="" className="w-96 "/>
                    <h3 className="font-medium text-2xl">Brian Taylor</h3>
                    <p>Decor and Design Consultant</p>
                </div>
                <div className="card card-body">
                    <img src="https://i.ibb.co/Mfm36yQ/ana-nichita-BI91-Nrpp-E38-unsplash.jpg" alt="" className=" h-64"/>
                    <h3 className="font-medium text-2xl">Kevin Nelson</h3>
                    <p>Budget Analyst (BA)</p>
                </div>
            </div>
        </div>
    );
};

export default About;