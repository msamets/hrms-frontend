import axios from "axios";


export default class JobPositionService{

    add(jobPosition){
        return axios.post('http://localhost:8080/api/jobPosition/add',jobPosition)
    }
    
    getAll(){
        return axios.get('http://localhost:8080/api/jobPosition/getall')
    }
}