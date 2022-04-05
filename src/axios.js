import axios from "axios";
const fetchUrl = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
export default fetchUrl;