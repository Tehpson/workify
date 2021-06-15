import React from 'react'
import './Home.css'

export const Index = () => {
    return (
        <div className='homeViewWrapper'>
            <img
                className='ProfilePicture'
                src='https://thispersondoesnotexist.com/image'
                alt='error..' />
            <span className='userName'>User Name</span>
            <span className='bio'>Bio</span>
            <textarea className='addNewWorkout'>Enter workout</textarea>
        </div>


    )
}
