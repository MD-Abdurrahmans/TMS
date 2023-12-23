import { MdNearbyError } from "react-icons/md";
import { Link } from "react-router-dom";

const Error = () => {

  return (
    <div className="flex justify-center flex-col  items-center min-h-screen">
     

      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-5xl text-green-500 ">Page Not Found</h1>
     
             <MdNearbyError className="text-7xl text-red-700 my-3"/>

              <Link to='/'>
              <button className="btn bg-green-600 text-white">Go Home</button>
              </Link>
      </div>
    </div>
  );
};



export default Error
