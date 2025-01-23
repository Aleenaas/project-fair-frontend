import { commonApi } from "./commonApi"
import { serverUrl } from "./serviceUrl"


//register request
export const requestApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

//login request
export const loginApi = async(reqBody)=>{
    return await commonApi(`POST`, `${serverUrl}/login`,reqBody,"")
}

//add project
export const addProjectApi = async(reqBody, reqHeader)=>{
    return await commonApi(`POST`, `${serverUrl}/add-project`, reqBody, reqHeader)
}

//get home projects
export const homeProjectApi = async()=>{
    return await commonApi('GET', `${serverUrl}/home-project`)
}

//all projects
//query parameter - baseurl?key = value

export const allProjectApi = async(searchKey,reqHeader)=>{
    return await commonApi('GET', `${serverUrl}/all-project?search=${searchKey}`,"",reqHeader)
}

//all user projects
export const userProjectApi = async(reqHeader)=>{
    return await commonApi('GET', `${serverUrl}/user-project`,"",reqHeader)
}

//api to remove user projects
export const removeUserProjectApi = async(id, reqHeader)=>{
    return await commonApi('DELETE', `${serverUrl}/remove-userproject/${id}`,{}, reqHeader)
}

//api to update user project
export const updateUserProjectApi = async(id, reqBody, reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/update-userProject/${id}`, reqBody, reqHeader)
}

//api to update ser profile
export const updateUserProfileApi = async(reqBody, reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/update-userProfile`, reqBody, reqHeader)
}