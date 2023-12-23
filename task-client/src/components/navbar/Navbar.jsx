/** @format */

import {NavLink} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MdPanoramaVerticalSelect } from "react-icons/md";
const Navbar = () => {

    const {user,logOut} = useAuth();

    const handleLogout =()=>{
 
         logOut().then((res)=>console.log(res)).catch((error)=>console.log(error))

    }

  // links

  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>

    {
        user && 
        <li>
        <NavLink to='/dashboard'>Dashboard</NavLink>
      </li>
    }

   {
    user ? <>
    <li>
        <button onClick={handleLogout} className="" >Logout</button>
      </li>
    </> : <>
    
    <li>
        <NavLink to='/login'>Login</NavLink>
      </li>
      <li>
        <NavLink to='/register'>Register</NavLink>
      </li>
    </>
   }
      
      
    </>
  );

  return (
    <div>
      <div className='navbar bg-base-100 shadow-2xl'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {links}
            </ul>
          </div>
          <a className='btn btn-ghost text-xl'><MdPanoramaVerticalSelect className="text-2xl text-yellow-500"/> TMS</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{links}</ul>
        </div>
        {/* <div className='navbar-end'>
          <a className='btn'>Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
