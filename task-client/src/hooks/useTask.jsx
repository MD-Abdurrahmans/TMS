import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useTask = () => {
const axiosSecure = useAxios();
    const {data:manageTask,refetch} = useQuery({

        queryKey:['task'],
        queryFn:async()=>{

        const res = await axiosSecure.get('/createTask');


        return res.data

        }
    })

    return [manageTask,refetch]
};

export default useTask;