import React from 'react'
import {UsersPagePropsType} from "./UsersContainer";
import axios from "axios";


export const Users = (props: UsersPagePropsType) => {

    const style = {
        width: "50px",
        height: "50px",
        color: "red"
    }

    let getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            {props.users.map(m =>
                <div key={m.id}>
<span>
<div>
    <img style={style} src={m.photos.small ? m.photos.small : ''} alt={'photo'}/>
</div>
    <div>
        {m.followed ?
            <button onClick={(e) => props.changeFollow(m.id)}>Follow</button>
            : <button onClick={(e) => props.changeFollow(m.id)}>Unfollow</button>
        }
    </div>
</span>
                    <span>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </span>
                        <span>
                            <div>{'m.location.city'}</div>
                            <div>{'m.location.country'}</div>
                        </span>

                    </span>
                </div>)
            }
        </div>
    )
}