import axios from "axios";


export default class EmployerService{

    add(employer){
        return axios.post('http://localhost:8080/api/employer/add',employer)
    }

    getAll(){
        return axios.get('http://localhost:8080/api/employer/getall')
    }
}