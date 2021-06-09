import http from '../FakeAPI'

const getByCategory = (category: string, limit?: number) => {
	const defaultValue = limit ? limit : 5
	return http.get(`category/${category}?limit=${defaultValue}`)
}


export default {
	getByCategory
}