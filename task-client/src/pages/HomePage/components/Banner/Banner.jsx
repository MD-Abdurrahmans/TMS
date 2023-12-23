import { Link } from "react-router-dom";
// import useAuth from "../../../../hooks/useAuth";




const Banner = () => {



    return (
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1002126898/photo/close-up-focus-on-employee-hand-point-review-on-dashboard-tablet-for-ask-and-consulting-about.jpg?s=612x612&w=0&k=20&c=ayNQwE-oba6vqShzVIDtDjxMbpYJSV2LfCVHqqRTkaU=)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">Dive into a seamless task management experience tailored just for you</h1>
          <p className="mb-5">Take control, stay organized, and achieve more with our cutting-edge management platform</p>
          <Link to='/login'> <button className="btn bg-yellow-400 border-0 text-white">Let`s Explorer</button></Link>
        </div>
      </div>
    </div>
    );
};

export default Banner;