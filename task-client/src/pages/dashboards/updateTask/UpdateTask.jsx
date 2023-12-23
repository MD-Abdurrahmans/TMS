import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";
import useTask from "../../../hooks/useTask";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const UpdateTask = () => {
    const axiosSecure = useAxios();
const {id} = useParams();
// console.log(id)
const [manageTask] = useTask();
// console.log(manageTask)
 const navigate = useNavigate();
const findTask =  manageTask?.find((task)=>task._id === id)

console.log(findTask)

    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) =>{
        console.log(data)
     
       const res = await  axiosSecure.put(`/updateTask/${findTask._id}`,data)

       console.log(res)
         if(res.data?.acknowledged){

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Updated Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            navigate('/dashboard/manageTask')
         }
      }


    return (
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)} >

 <div className="form-control">
          <label className="label">
            <span className="label-text">TaskName</span>
          </label>
          <input type="taskName" {...register('taskName')} defaultValue={findTask?.taskName}  className="input input-bordered" required />
        </div>

 <div className="form-control">
          <label className="label">
            <span className="label-text">Task Description</span>
          </label>
        
          <textarea className="textarea textarea-bordered" {...register('taskDescription')} defaultValue={findTask?.taskDescription}  ></textarea>
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <select   {...register('status')} className="select select-bordered w-full ">
  <option  defaultValue={findTask?.status}  >{findTask?.status}</option>
  <option>Todo</option>
  <option>Doing</option>
  <option>Done</option>
</select>
        </div>
        

   <div className="my-4">

     <button  type="submit" className="btn w-full  ">Create Task</button>
   </div>

 </form>
        </div>
    );
};

export default UpdateTask;