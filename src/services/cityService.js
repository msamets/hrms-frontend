import axios from "axios";


export default class CityService{

    getAll(){
        return axios.get("http://localhost:8080/api/city/getAll")
    }

    add(cityName){
        return axios.post('http://localhost:8080/api/city/add',cityName)
    }
    
}