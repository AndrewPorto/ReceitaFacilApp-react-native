import axios from "axios";

/*
json-server --watch -d 180 --host 192.168.8.198 db.json RODAR API
*/

const api = axios.create({
    baseURL: 'http://192.168.8.198:3000/'
})

export default api;