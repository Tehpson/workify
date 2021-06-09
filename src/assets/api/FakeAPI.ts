import Axios from 'axios'

const FakeAPI = Axios.create({
	baseURL: 'https://fakestoreapi.com/products/'
})

export default FakeAPI