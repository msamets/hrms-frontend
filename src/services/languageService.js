import axios from "axios";


export default class LanguageService{

    add(language){
        return axios.post('http://localhost:8080/api/language/add',language)
    }

    getAll(){
        return axios.get('http://localhost:8080/api/language/getAll')
    }
}