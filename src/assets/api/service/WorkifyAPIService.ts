import internal from 'stream';
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
	/*return http.get(`/user/${userID}/workoutdata`)*/
	const yeet = {data:[
		{
			Title: 'runing',
			Time: '60',
			comment: "I did run a lot it was exhusting",
			Layout: '1',
			user: {Name: 'Test',Id:1}
		},
		{
			Title: 'Gym',
			Time: '90',
			comment: "ugga bugga gym",
			Layout: '1',
			user: {Name: 'Test',Id:1}
		}
	]
}
	return yeet
}

const GetWorkout = (userID: string, workoutID: string) => {
	return http.get(`/user/${userID}/workoutdata/${workoutID}`)
}

const AddWorkout = (userID: string, title: string, comment: string, time: number, layout: number) => {
	const data = {
		Title: title,
		Time: time.toString(),
		Comment: comment,
		Layout: Number.parseInt(layout.toString(), 10),
	}
	return http.post(`/user/${userID}/workoutdata`, data)
}


export default {
	CreateUser,
	GetallWorkouts,
	GetWorkout,
	AddWorkout,
	GetUser,
	RequestLogin
}