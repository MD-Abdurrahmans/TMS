import axios from "axios";




const useAxios = () => {

    const instance = axios.create({

        baseURL: 'http://localhost:4000/api/v1'
    }) 

    return  instance;
};

export default useAxios;