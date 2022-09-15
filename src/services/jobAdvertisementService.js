import axios from "axios";


export default class JobAdvertisementService{

    add(jobAdvertisement){
        return axios.post('http://localhost:8080/api/jobAdvertisement/add',jobAdvertisement)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getAll")
    }

    getAllByEmployerId(employerId){
        return axios.get('http://localhost:8080/api/jobAdvertisement/getAllByEmployerId?employerId=${employerId}')
    }

    getAllSortedByDateAsc(){
        return axios.get('http://localhost:8080/api/jobAdvertisement/getAllSortedByDateAsc')
    }

    getTurnDeactive(id){
        return axios.put('http://localhost:8080/api/jobAdvertisement/getTurnDeactive?id=${id}')
    }
}