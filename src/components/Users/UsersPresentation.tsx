import React from "react";
import s from "./UsersClass.module.css";
import {UsersType} from "../../redux/State";
import {NavLink} from "react-router-dom";


type UsersPresentationPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,
    users: UsersType,
    changeFollow: (id: number) => void,
    isFetching: boolean
}

export const UsersPresentation = (props: UsersPresentationPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(m => <span onClick={(e) => {
                    props.onPageChanged(m)
                }} className={props.currentPage === m ? s.selected : ''}>{m} </span>)}
            </div>
            {props.users.map(m =>
                <div key={m.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile' + '/'+ m.id}>
                                <img src={m.photos.small ? m.photos.small : ''}/>
                                    </NavLink>
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