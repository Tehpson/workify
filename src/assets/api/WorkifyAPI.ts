import Axios from 'axios'

const WorkifyAPI = Axios.create({
	baseURL: 'http://81.234.98.86:42069/api'
})

export default WorkifyAPI
