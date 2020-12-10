import axios from "axios";

export default axios.create({
    baseURL: 'https://api.wegmans.io',
    responseType: "json",
})
