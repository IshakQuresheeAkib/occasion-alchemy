import useAuth from '../../Hook/useAuth'
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const { createUser } = useAuth();
    const navigate = useNavigate();
    

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(form);
        
        console.log(email,password);

        createUser(email,password)
        .then(({user})=>{
            console.log(user);
            e.target.reset();
            navigate('/');
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className="hero mt-20 w-2/5 mx-auto p-10 shadow-xl mb-20">
                <div className="hero-content flex flex-col items-stretch w-4/5">
                    <h1 className="text-3xl font-semibold text-center text-[#403F3F] pb-5">Register your account</h1>
                    <form onSubmit={handleRegister} className=" border-t border-[#E7E7E7] pt-5">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text text-[#403F3F] font-semibold">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input rounded bg-[#F3F3F3] w-[300] placeholder:text-xs focus:outline-none focus:border-2 focus:border-[#403F3F]"  />
                        </div>
                        <div className="form-control my-4">
                            <label className="label">
                            <span className="label-text text-[#403F3F] font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name="imageUrl" placeholder="Enter your photo url" className="input rounded bg-[#F3F3F3] w-[300] placeholder:text-xs focus:outline-none focus:border-2 focus:border-[#403F3F]"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text text-[#403F3F] font-semibold">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email address" className="input rounded bg-[#F3F3F3] w-[300] placeholder:text-xs focus:outline-none focus:border-2 focus:border-[#403F3F]" required />
                        </div>
                        <div className="form-control my-4">
                            <label className="label">
                            <span className="label-text text-[#403F3F] font-semibold ">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input rounded bg-[#F3F3F3] placeholder:text-xs focus:outline-none focus:border-2 focus:border-[#403F3F]" required />
                        </div>
                        <div className="py-3 flex text-xs items-center gap-2 text-[#706F6F]">
                            <input type="checkbox" className="checkbox-xs " />
                            <span>Accept <span className="font-semibold"> Term & Conditions</span></span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-ghost bg-[#403F3F] text-white normal-case rounded">Login</button>
                        </div>
                        <p className="mt-7 text-[#706F6F] font-semibold text-sm">{`Already Have An Account ?`} <Link to='/login' className="text-green-400 underline underline-offset-2">Log in</Link> </p>
                    </form>                    
                </div>
            </div>
    );
};

export default Register;