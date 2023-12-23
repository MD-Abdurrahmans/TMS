import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAxios from "../../../hooks/useAxios";
import { MdOutlineDashboard } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { RiFilePaper2Line } from "react-icons/ri";
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdPanoramaVerticalSelect } from "react-icons/md";
const Navlinks = () => {
const axiosSecure = useAxios();
    const {
        register,
        handleSubmit,
        // formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {

        // console.log(data)

   
 

        
       const res = await  axiosSecure.post('/createTask',data)

       console.log('createTask',res)
        if(res?.data?.acknowledged){

            alert("created task")
        }

      }


    return (
        <div className="my-5">
          

<dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">


 <form onSubmit={handleSubmit(onSubmit)} >

 <div className="form-control">
          <label className="label">
            <span className="label-text">TaskName</span>
          </label>
          <input type="taskName" {...register('taskName')} placeholder="TaskName" className="input input-bordered" required />
        </div>

 <div className="form-control">
          <label className="label">
            <span className="label-text">Task Description</span>
          </label>
        
          <textarea className="textarea textarea-bordered" {...register('taskDescription')} placeholder="Task Description"></textarea>
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <select {...register('status')} className="select select-bordered w-full ">
  <option disabled selected>status</option>
  <option>Todo</option>
  <option>Doing</option>
  <option>Done</option>
</select>
        </div>
        

   <div className="my-4">

     <button  type="submit" className="btn w-full  ">Create Task</button>
   </div>

 </form>

    <div className="modal-action">
      <form  method="dialog">
      
    


        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

 <div className="mx-8 my-4" >
 <span className="text-3xl flex items-center "> <MdPanoramaVerticalSelect className="text-3xl text-yellow-500"/> TMS</span>

 </div>
              <ul className="space-y-5">

            
           

              <li>
              <Link to='/dashboard'>

              <button className="btn w-full"> <MdOutlineDashboard className="text-2xl"/>Dashboard</button>
              </Link>
                </li>
            

                <li>
              <Link to=''>

              <button className="btn w-full" onClick={()=>document.getElementById('my_modal_6').showModal()}> <IoNewspaperSharp className="text-2xl"/> Create Task</button>
              </Link>
                </li>
                <li>
              <Link to='/dashboard/manageTask'>

              <button className="btn w-full"><RiFilePaper2Line className="text-2xl"/> Manage Task</button>
              </Link>
                </li>


     <div className="divider bg-white h-0.5"></div>
                <li>
              <Link to='/'>

              <button className="btn w-full"><RiHomeOfficeLine className="text-2xl"/> Go Home</button>
              </Link>
                </li>
              </ul>
        </div>
    );
};

export default Navlinks;