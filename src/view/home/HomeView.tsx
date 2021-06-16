import React from 'react'
import './HomeView.css'
import Avatar from '../../assets/image/avatar.png'

export const Index = () => {
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
