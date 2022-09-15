import axios from "axios";



export default class JobSeekerSchoolService{

    add(jobSeekerSchool){
        return axios.post('http://localhost:8080/api/jobSeekerSchool/add',jobSeekerSchool)
    }

    getAll(){
        return axios.get('http://localhost:8080/api/jobSeekerSchool/getAll')
    }
}