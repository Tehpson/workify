import http from '../WorkifyAPI'

const GetUser = (userID: string) => {
	return http.get(`/user/${userID}`);
}

const RequestLogin = (username: string, password: string) => {
	const data = {
		email: username,
		password: password
	}
	return http.post('/user/login', data)
}

const CreateUser = (username: string, password: string, email: string) => {
	const data = {
		email: email,
		password: password,
		username: username
	}
	return http.post('/user/createuser', data)
}

const GetallWorkouts = (userID: string) => {
	return http.get(`/user/${userID}/WorkoutData`)
}

const GetWorkout = (userID: string, workoutID: string) => {
	return http.get(`/user/${userID}/WorkoutData/${workoutID}`)
}

const AddWorkout = (userID: string, title: string, comment: string, time: number, layout: number) => {
	const data = {
		title: title,
		date: new Date().getDate.toString() + new Date().getTime.toString(),
		time: time,
		comment: comment,
		layout: layout,
	}
	return http.post(`/user/yeeet}/WorkoutData}`, data)
}


export default {
	CreateUser,
	GetallWorkouts,
	GetWorkout,
	AddWorkout,
	GetUser,
	RequestLogin
}