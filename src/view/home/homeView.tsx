import React from 'react'
import './HomeView.css'
import Avatar from '../../assets/image/avatar.png'
import { useEffect } from 'react'
import WorkifyAPIService from '../../assets/api/service/WorkifyAPIService'

export const Index = () => {
    useEffect(() => {
        
    }, [])

    const fetchWorkoutData = async () => {
        try {
            const data = await {
                
            }
        }
        catch {

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
