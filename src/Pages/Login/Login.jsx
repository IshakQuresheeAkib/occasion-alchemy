import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../Hook/useAuth'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsGoogle,BsGithub } from 'react-icons/bs';

const Login = () => {

    const { signIn,user,googleSignIn } = useAuth()
    const navigate = useNavigate();
    

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData (e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        
        if (user) {
            return toast.error('Please Log Out first from your current account,then log in to new account!');          
        }   

        signIn(email,password)
        .then(()=>{
            toast.success('Log In Successfully!');   
            navigate('/')
        })
        .catch(err=>{
            console.log(email,password);
            console.log(err);
        })
    }
    
    const handleGoogle = () =>{
        return googleSignIn();
    }

    return (
        <div className="shadow-xl md:w-2/5 w-11/12 border rounded-xl mx-auto my-20 ">
            <div className="hero p-10 bg-white">
                <div className="hero-content flex flex-col items-stretch md:w-4/5">
                    <h1 className="text-3xl font-semibold text-center text-[#403F3F] pb-5">Login your account</h1>
                    <form onSubmit={handleLogin} className=" border-t border-[#E7E7E7] pt-5">
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
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-ghost bg-[#403F3F] text-white normal-case rounded">Login</button>
                        </div>
                        <p className="mt-7 text-[#706F6F] font-semibold text-sm">{`Don't Have An Account ?`} <Link to='/register' className="text-[#F75B5F]">Register</Link> </p>
                    </form>                    
                </div>
            </div>
            <div className="text-center pb-7">
                <div className="flex justify-center items-center gap-2">
                    <hr className="w-16 h-px bg-gray-300"/>
                    <h4 className="text-[#706F6F] font-semibold ">Continue with</h4>
                    <hr className="w-16 h-px bg-gray-300"/>
                </div>
                <div className="flex gap-3 justify-center text-xl mt-4">
                    <BsGoogle onClick={()=> handleGoogle()} className=" cursor-pointer text-green-400"></BsGoogle>
                    <BsGithub className="cursor-pointer text-green-400"></BsGithub>
                </div>
            </div>
        </div>
    );
};

export default Login;