import React from 'react'
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/State";

type UserPresentationType = {
    user: UserType,
    followChangerHandler: (id: number, followed: boolean) => void,
    followingInProgress: boolean
}

export const User = ({user, followingInProgress, followChangerHandler, }: UserPresentationType) => {
    return (
        <>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.small ? user.photos.small : 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg'}
                            height={'100px'} width={'100px'}
                            alt='user face'/>
                    </NavLink>
                </div>
                <div>
                    <button onClick={(e) => followChangerHandler(user.id, user.followed)}
                            disabled={followingInProgress}>
                        {user.followed ? 'Unfollow' : 'Follow'}
                    </button>


                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.followed ? 'You are Followed!!!' : "Nope"}</div>
                    <div>{'m.location.country'}</div>
                </span>
            </span>
        </>
    )
}