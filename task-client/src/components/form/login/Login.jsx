import { useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();

const {user,signIn, signInWithGoogle} = useAuth();
const [error,setError] = useState();
if(user){
    navigate('/dashboard')
  }
const axiosSecure = useAxios();
    const {
        register,
        handleSubmit,
        // formState: { errors },
      } = useForm()
    
     

      const onSubmit = async(data) =>{

        console.log(data)
    
        const res = await signIn(data?.email, data?.password);
        console.log(res);
        if (res?.user?.email) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Account Logged Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          
        
  
            navigate('/')
  
        }
      }




    //   handle google 

    const handleGoogle = () => {
 

        signInWithGoogle().then((res)=>{
           console.log('gogres',res)
           const email=res?.user?.email;
           const userInfo = {email:email}    
           console.log('email',email)
            if(email){
   
               alert("account created")
               navigate('/')
               axiosSecure.post(`/users/${email}`,userInfo).then((res)=>{
                   if(res?.data?.acknowledged){
   
                       navigate('/')
                   }
               })
            }
        }).catch((error)=>setError(error))
   
     };

    return (
        <div>
            <div className="hero min-h-screen "  style={{backgroundImage: 'url(https://media.istockphoto.com/id/1279502184/photo/project-management-concept-with-gantt-chart.jpg?s=612x612&w=0&k=20&c=cyH6eJgMjZPuhYwCp1mc334Y3EOngkPAibyBBokJ7To=)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="text-center lg:text-left text-white">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6 max-w-sm mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl  text-white bg-transparent border">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" {...register('email')} placeholder="email" className="input text-black input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" {...register('password')} placeholder="password" className="input text-black input-bordered" required />
          <label className="label">
            <a href="#" className="text-red-500">{error}</a>
          </label>
        </div>

         <p>
           New Here? plese <Link to='/register' className="text-yellow-500 font-bold">Register</Link>
         </p>
        <div className="form-control mt-6">
          <button className="btn bg-yellow-500 text-white">Login</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogle} className="btn  bg-yellow-500 text-white"> <FaGoogle/> Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;