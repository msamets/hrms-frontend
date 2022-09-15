import axios from "axios";


export default class CityService{

    add(Cv){
        return axios.post('http://localhost:8080/api/cv/add',Cv)
    }

    addCoverLetterToCv(cvId, coverLetter){
        return axios.put('http://localhost:8080/api/cv/addCoverLetterToCv?coverLetter=${coverLetter}&cvId=${cvId}')
    }

    addGithubProfileToCv(cvId, githubProfile){
        return axios.put('http://localhost:8080/api/cv/addGithubProfileToCv?cvId=${cvId}&githubProfile=${githubProfile}')
    }

    addJobExperienceToCv(cvId, jobSeekerJobExperienceId){
        return axios.put('http://localhost:8080/api/cv/addJobExperienceToCv?cvId=${cvId}&jobSeekerJobExperienceId=${jobSeekerJobExperienceId}')
    }

    addLanguageToCv(cvId, jobSeekerLanguageId){
        return axios.put('http://localhost:8080/api/cv/addLanguageToCv?cvId=${cvId}&jobSeekerLanguageId=${jobSeekerLanguageId}')
    }

    addLinkedinProfileToCv(cvId, linkedinProfile){
        return axios.put('http://localhost:8080/api/cv/addLinkedinProfileToCv?cvId=${cvId}&linkedinProfile=${linkedinProfile}')
    }

    addPhotoToCv(cvId, photoId){
        return axios.put('http://localhost:8080/api/cv/addPhotoToCv?cvId=${cvId}&photoId=${photoId}')
    }

    addSkilltoCv(cvId, skill){
        return axios.put('http://localhost:8080/api/cv/addSkillToCv?cvId=${cvId}&skill=${skill}')
    }
    
    addSchoolToCv(cvId, jobSeekerSchoolId){
        return axios.put('http://localhost:8080/api/cv/addToSchoolToCv?cvId=${cvId}&jobSeekerSchoolId=${jobSeekerSchoolId}')
    }

    getJobSeekerJobExperienceOrderByQuitJobDateDesc(cvId){
        return axios.get('http://localhost:8080/api/cv/findJobSeekerJobExperienceOrderByQuitJobDateDesc?cvId=${cvId}')
    }

    getJobSeekerSchoolOrderByGraduationDateDesc(cvId){
        return axios.get('http://localhost:8080/api/cv/findJobSeekerJobExperienceOrderByQuitJobDateDesc?cvId=${cvId}')
    }

    getAll(){
        return axios.get('http://localhost:8080/api/cv/getAll')
    }

    getByJobSeeker(jobSeekerId){
        return axios.get('http://localhost:8080/api/cv/getByJobSeeker?jobSeekerId=${jobSeekerId}')
    }
}