import axios from "axios";



export default class JobExperienceService{
    
    add(jobExperience){
        return axios.post('http://localhost:8080/api/jobExperience/add',jobExperience)
    }

    getAll(){
        return axios.get('http://localhost:8080/api/jobExperience/getAll')
    }
}