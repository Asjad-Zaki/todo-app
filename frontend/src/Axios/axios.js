import axios from "axios"
const instance = axios.create({
    baseURL:"process.env.REACT_URI/api"
})
export default instance