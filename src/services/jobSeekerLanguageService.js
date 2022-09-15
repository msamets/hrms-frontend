import axios from "axios";


export default class JobSeekerLanguageService{

    add(jobSeekerLanguage){
        return axios.post('http://localhost:8080/api/jobSeekerLanguage/add',jobSeekerLanguage)
    }

    getAll(){
        return axios.get('http://localhost:8080/api/jobSeekerLanguage/getAll')
    }
}