import axios from 'axios'

const API = axios.create({
	baseURL: 'https://fakestoreapi.in/api'
})

export default API
