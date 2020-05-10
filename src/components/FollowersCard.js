import React, { useReducer } from 'react';

const FollowersCard = ({user, followers}) => {

    return (
        
        <div className='followers-card'>
            {followers.map((follower,index) => {
                return (
                    <div className='follower' key={index}>
                        <div className='follower-picture'>
                            <img src={follower.avatar_url} alt='Follower Picture' />
                        </div>
                     <div className='follower-info'>
                            <p><a href={follower.html_url}>{follower.login}</a></p>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard;