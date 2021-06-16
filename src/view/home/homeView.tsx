import React from 'react'
import './HomeView.css'
import Avatar from '../../assets/image/avatar.png'
import { useEffect } from 'react'
import WorkifyAPIService from '../../assets/api/service/WorkifyAPIService'
import {UserContext} from '../../provider/UserProvider'
import {useContext, useState} from 'react'

export const Index = () => {
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)
	const [serverRespons, setServerRespons] = useState<any>(null)

    useEffect(() => {
        
    }, [])

    const fetchWorkoutData = async () => {
        try {
            const {data} = await WorkifyAPIService.GetallWorkouts(authebticatedUser)
			setServerRespons(data)
            
        }
        catch (error){
			console.log(error)
        }
    }

    return (
        <div className='homeViewWrapper'>
            <img
                className='ProfilePicture'
                src={Avatar}
                alt='error..' />
            <span className='userName'>User Name</span>
            <span className='bio'>Bio</span>
            <button className='postButton'>Post</button>
        </div>


    )
}
