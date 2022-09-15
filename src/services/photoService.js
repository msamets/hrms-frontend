import axios from "axios";

export default class PhotoService{

    deleteById(photoId){
        return axios.delete('http://localhost:8080/api/photo/deleteById?photoId=${photoId}')
    }

    deleteByPublicId(publicId){
        return axios.delete('http://localhost:8080/api/photo/deleteByPublicId?publicId=${publicId}')
    }

    getById(photoId){
        return axios.get('http://localhost:8080/api/photo/getById?photoId=${photoId}')
    }

    getByPublicId(publicId){
        return axios.get('http://localhost:8080/api/photo/getByPublicId?publicId=${publicId}')
    }

    getByUserId(userId){
        return axios.get('http://localhost:8080/api/photo/getByUserId?userId=${userId}')
    }

    upload(userId, photo){
        return axios.post('http://localhost:8080/api/photo/upload?userId=${userId}', photo)
    }
}