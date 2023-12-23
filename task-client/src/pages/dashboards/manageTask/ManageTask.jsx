/** @format */

import { Link } from "react-router-dom";
import useTask from "../../../hooks/useTask";
import Container from "../../../shared/Container";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const ManageTask = () => {
  const [manageTask,refetch] = useTask();
const axiosSecure = useAxios();
//   console.log("lll", manageTask);


const handleDelete =(id)=>{



Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {


const res = await axiosSecure.delete(`/delete/${id}`)

console.log('delted',res)

 if(res.data.acknowledged){


  Swal.fire({
    title: "Deleted!",
    text: "Your Task has been deleted.",
    icon: "success"
  });

 refetch()
 }



  }
});
}

  return (
    <div className="my-10">
      <Container>
        <h1 className='text-4xl my-4'>manageTask</h1>

        <div>
          <div className='overflow-x-auto'>
            <table className='table table-zebra'>
              {/* head */}
              <thead className="bg-gray-500 text-white">
                <tr>
                  <th></th>
                  <th>Task Name</th>
                  <th>Task Description</th>
                  <th>Task Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
        
             {
                 manageTask?.map((task,index)=>
                 <>
                     <tr key={task._id}>
                  <th>{index+1}</th>
                  <td>{task?.taskName}</td>
                  <td>{task?.taskDescription}</td>
                  <td>{task?.status}</td>

                  <td className="space-x-2">
                      <Link to={`/dashboard/update/${task?._id}`}>
                      <button>Update</button>
                      </Link>
                      <Link onClick={()=>handleDelete(task?._id)} >
                      <button>Delete</button>
                      </Link>
                   
                  </td>
                </tr>
                 </>)
             }
            
                
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageTask;
