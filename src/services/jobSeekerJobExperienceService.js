import axios from "axios";



export default class jobSeekerJobExperienceService{
    
    add(jobSeekerJobExperience){
        return axios.post('http://localhost:8080/api/jobSeekerJobExperience/add',jobSeekerJobExperience)
    }

    getAll(){
        return axios.get('http://localhost:8080/api/jobSeekerJobExperience/getAll')
    }
}