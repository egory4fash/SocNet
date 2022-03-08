import React from 'react'
import {UsersPagePropsType} from "./UsersContainer";

export const Users = (props: UsersPagePropsType) => {

    const style = {
        width: "50px",
        height: "50px",
        color: "red"
    }

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://www.clipartmax.com/png/small/248-2487966_matthew-man-avatar-icon-png.png',
                followed: true,
                fullName: "Egor",
                status: "No brain-no pain",
                location: {city: "Verkhnedvinsk", country: "Belarus"}
            },
            {
                id: 2,
                photoURL: 'https://www.clipartmax.com/png/small/248-2487966_matthew-man-avatar-icon-png.png',
                followed: false,
                fullName: "Anna",
                status: "Anime RULEZ",
                location: {city: "Vitebsk", country: "Belarus"}
            },
            {
                id: 3,
                photoURL: 'https://www.clipartmax.com/png/small/248-2487966_matthew-man-avatar-icon-png.png',
                followed: true,
                fullName: "Dina",
                status: "------",
                location: {city: "Kyiv", country: "Ukraine"}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(m =>
                    <div key={m.id}>

<span>
<div>
    <img style={style} src={m.photoURL}/>
</div>
    <div>
        {m.followed ?
        <button onClick={(e) => props.changeFollow(m.id)}>Follow</button>
            :<button onClick={(e) => props.changeFollow(m.id)}>Unfollow</button>
        }
    </div>
</span>
                        <span>
                        <span>
                            <div>{m.fullName}</div>
                            <div>{m.status}</div>
                        </span>
                        <span>
                            <div>{m.location.city}</div>
                            <div>{m.location.country}</div>
                        </span>

                    </span>
                    </div>)
            }
        </div>
    )
}