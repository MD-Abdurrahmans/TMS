/** @format */

import {useState} from "react";
import useAuth from "../../../hooks/useAuth";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
const Register = () => {
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const {user, createUser, signInWithGoogle} = useAuth();
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,

    // formState: {errors},
  } = useForm();


   if(user){
    navigate('login')
   }

  const onSubmit = async (data) => {
    console.log(data);

    try {
        
      const res = await createUser(data?.email, data?.password);
      console.log(res);
      if (res?.user?.email) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Account Created  Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        const userInfo = {email: data?.email};

        axiosSecure
          .post(`/users/${data?.email}`, userInfo)
          .then((res) => {

             if(res?.data?.acknowledged){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "access  Successfully",
                showConfirmButton: false,
                timer: 1500
              });
                navigate('/login')
             }
          }).catch((error)=>setError(error))


      }
    } catch (error) {
      setError(error);
    }
  };
  // handle google

  const handleGoogle = () => {
 

     signInWithGoogle().then((res)=>{
        console.log('gogres',res)
        const email=res?.user?.email;
        const userInfo = {email:email}    
        console.log('email',email)
         if(email){

            alert("account created")

            axiosSecure.post(`/users/${email}`,userInfo).then((res)=>{
                if(res?.data?.acknowledged){

                    navigate('/login')
                }
            })
         }
     }).catch((error)=>console.log(error))

  };

  return (
    <div>
      <div className='hero min-h-screen '  style={{backgroundImage: 'url(https://media.istockphoto.com/id/1181590449/photo/businesswoman-creates-priority-to-do-list-on-sticky-notes.jpg?s=612x612&w=0&k=20&c=OPb-K-q2hP5EjPczCy0uQP9Fq0dCoSE60FxPaNiT4Xk=)'}}>
      <div className="hero-overlay bg-opacity-60"></div>

        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left text-white'>
            <h1 className='text-5xl font-bold'>Register now!</h1>
            <p className='py-6 max-w-md mx-auto'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl  bg-transparent border text-white'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              <div className='form-control'>
                <label className='label '>
                  <span className='label-text text-white'>Email</span>
                </label>
                <input
                  type='email'
                  {...register("email")}
                  placeholder='email'
                  className='input text-black input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-white'>Password</span>
                </label>
                <input
                  type='password'
                  {...register("password")}
                  placeholder='password'
                  className='input text-black input-bordered'
                  required
                />
                <label className='label'>
                  <a href='#' className='text-red-800'>
                    {error}
                  </a>
                </label>
              </div>
              
               <p>Already Have an Account? <Link to='/login' className="text-yellow-500 font-bold">Login</Link></p>
               
              <div className='form-control mt-6'>
                <button type='submit' className='btn  bg-yellow-500 text-white'>
                  Register
                </button>
              </div>

              <div className='form-control mt-6'>
                <button
                  onClick={handleGoogle}
                  type='submit'
                  className='btn bg-yellow-500 text-white'
                >
                  <FaGoogle/> Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
