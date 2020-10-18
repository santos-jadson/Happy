import axios from 'axios'
import { BASE_IP } from "react-native-dotenv"

const api = axios.create({
    baseURL: `http://${BASE_IP}:3333/`
})

export default api