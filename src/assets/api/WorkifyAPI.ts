import Axios from 'axios'

const WorkifyAPI = Axios.create({
	baseURL: 'https://localhost:42069/api'
})

export default WorkifyAPI
