import React from 'react';

const Card = ({user, followUser}) => {

    return ( 
        <div className='user-info'>
            <div className='user-image'>
                <img src={user.avatar_url} alt='User Picture' />
            </div>
            <div className='user'>
                <p>User: {user.name}</p>
                <p>Username: <a href={user.html_url}>{user.login}</a></p>
                <p>Followers: {user.followers} </p>
                <p>Following: {user.following}</p>
                <p>Location: {user.location}</p>
                <a href={`https://api.github.com/users/follow?target=${user.login}`} 
                className='button'>Follow</a>
                
            </div>
        </div>

    )
}



export default Card;