import http from '../WorkifyAPI'

export const RequestLogin = (username:string, password:string) => {
	const data = {
		email: username,
		password: password
	}
	return http.post('/user/login', data)
}

const CreateUser = (username:string, password:string, email:string) => {
	const data = {
		email: email,
		password: password,
		username: username
	}
	return http.post('/user/createuser', data)
}

const GetallWorkouts = (userID:string)=>{
	return http.get(`/user/${userID}/WorkoutData`)
}
const GetWorkout = (userID:string, workoutID:string)=>{
	return http.get(`/user/${userID}/WorkoutData/${workoutID}`)
}

export default{
	
	CreateUser,
	GetallWorkouts,
	GetWorkout
}