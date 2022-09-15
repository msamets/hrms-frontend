import axios from "axios";



export default class JobSeekerService{
    add(jobSeeker){
        return axios.post('http://localhost:8080/api/jobSeeker/add',jobSeeker)
    }

    getAll(){
        return axios.get('http://localhost:8080/api/jobSeeker/getall')
    }
}