import axios from "axios";


export default class SchoolService{

    add(school){
        return axios.post('http://localhost:8080/api/school/add', school)
    }

    getAll(){
        return axios.get('http://localhost:8080/api/school/getAll')
    }

}