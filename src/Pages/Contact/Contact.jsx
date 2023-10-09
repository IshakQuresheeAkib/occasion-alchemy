
const Contact = () => {
    return (
        <div className="relative md:mb-20">
            <div className="hero min-h-screen bg-[url(https://i.ibb.co/NjYrf02/priscilla-du-preez-OEdk-Pax-YMXU-unsplash.jpg)] bg-cover bg-no-repeat ">
                <div className="absolute bg-black/60 top-0 w-full h-full backdrop-blur-sm"></div>
                <div className="hero-content flex-col lg:flex-row pt-20 pb-36 md:px-10 px-2">
                    <div className="text-center lg:text-left text-white">
                    <h1 className="text-5xl font-bold">Get in touch!</h1>
                    <p className="py-6 md:text-base text-xs md:leading-10 tracking-wider leading-7">We would love to hear from you! Whether you have questions about our services, want to discuss your upcoming event, or simply want to say hello, feel free to reach out. Our friendly team is here to assist you. You can contact us via the information below or by filling out the contact form. We look forward to connecting with you and making your event dreams come true.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 rounded-none">
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <input type="password" placeholder="message" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-success text-white text-lg normal-case rounded-sm">Send</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;