/** @format */

import { Link, Outlet, useLocation } from "react-router-dom";
import useTask from "../../hooks/useTask";
import Navlinks from "../../pages/dashboards/Navlinks/Navlinks";
import { MdEditSquare } from "react-icons/md";
import { useForm } from "react-hook-form"
import useAxios from "../../hooks/useAxios";
import { MdPanoramaPhotosphereSelect } from "react-icons/md";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [manageTask,refetch] = useTask();
// console.log(manageTask)
  const todo = manageTask?.filter((task)=>task.status === 'Todo');
  const doing = manageTask?.filter((task)=>task.status === 'Doing');
  const done = manageTask?.filter((task)=>task.status === 'Done');

  const location = useLocation();


  const axiosSecure = useAxios();
const [ids,setIds] = useState();
  const {
      register,
      handleSubmit,
      // formState: { errors },
    } = useForm()
  
    const onSubmit = async(data) => {

      console.log('datassss',data)
      console.log('idsss',ids)

  

     const res = await  axiosSecure.put(`/updateTask/${ids}`,data)

      console.log('ress',res)

       if(res?.data?.acknowledged){

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Status Changes",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
       }


    }


  
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">


 <form onSubmit={handleSubmit(onSubmit)} >


           
     

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

     <button  type="submit" className="btn w-full  ">Change  Status</button>
   </div>

 </form>

    <div className="modal-action">
      <form  method="dialog">
      
    


        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

      <div className='grid md:grid-cols-12 border w-full'>
        <div className='md:col-span-2 bg-green-300 min-h-screen'>
          <Navlinks></Navlinks>
        </div>
        <div className='md:col-span-9 p-5 min-h-screen overflow-x-auto'>
        
          {
            location.pathname === '/dashboard' ?
             <>
              <div className="grid grid-cols-1  my-5  md:grid-cols-3">
            

            {/* todo */}
 
             <div >
                <h1 className="text-3xl font-bold text-center">TODO</h1>
               {
                 todo?.map((task)=><>
                 
                  <div className="border m-2 p-2 overflow-hidden" key={task._id} >
                    
                     <div className="grid grid-cols-12">
                     <div className="col-span-8">
                      <p className="font-bold">{task?.taskName}</p>
                     <p>{task?.taskDescription}</p>

                      </div>
                      <div className="col-span-3">
                 
                       <div onClick={()=>setIds(task?._id)}>
                       <button     title="Status" className=" " onClick={()=>document.getElementById('my_modal_5').showModal()}><MdPanoramaPhotosphereSelect className="text-3xl"/></button>

                   
                       </div>
                          <Link to={`/dashboard/update/${task?._id}`}>
                          <p><MdEditSquare className="text-3xl"/></p>
                          </Link>
                      </div>
                     </div>
                  </div>
 
                 </>)
               }
             </div>
 
            {/* ongoing */}
 
             <div>
                <h1 className="text-3xl font-bold text-center">ONGOING</h1>
               {
                 doing?.map((task)=><>
                 
                  <div className="border m-2 p-2" key={task._id} >
                    
                  <div className="grid grid-cols-12">
                     <div className="col-span-8">
                      <p className="font-bold">{task?.taskName}</p>
                     <p>{task?.taskDescription}</p>

                      </div>
                      <div className="col-span-3">
                 
                       <div onClick={()=>setIds(task?._id)}>
                       <button     title="Status" className=" " onClick={()=>document.getElementById('my_modal_5').showModal()}><MdPanoramaPhotosphereSelect className="text-3xl"/></button>

                   
                       </div>
                          <Link to={`/dashboard/update/${task?._id}`}>
                          <p><MdEditSquare className="text-3xl"/></p>
                          </Link>
                      </div>
                     </div>
                  </div>
 
                 </>)
               }
             </div>
 
            {/*  completed */}
 
             <div>
                <h1 className="text-3xl font-bold text-center"> Completed</h1>
               {
                 done?.map((task)=><>
                 
                  <div className="border m-2 p-2" key={task._id} >
                    
                     <p className="font-bold">{task?.taskName}</p>
                     <p>{task?.taskDescription}</p>
                  </div>
 
                 </>)
               }
             </div>
 
          </div>
             </> 
             : <>
             
              <Outlet></Outlet>
             </>
            
          }

        

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
