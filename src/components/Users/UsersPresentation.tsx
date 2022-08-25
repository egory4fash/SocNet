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
    isFetching: boolean,
    followChanger: (userId: number, followed: boolean) => void,
    followingInProgress: boolean,
    followingInProgressHandler: (followingInProgress: boolean) => void
}

export const UsersPresentation = (props: UsersPresentationPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];

    for (let i = props.currentPage-2; i <= props.currentPage+2; i++) {
        if(i <1) {
            continue
        }else if (i>pagesCount) {
            break
        }

        else{
        pages.push(i)}
    }
    // let currentPage = 1
    // for (let i = currentPage-2; i <= currentPage+2; i++) {
    //     if (i<1) {
    //         continue
    //     }else  if (i>pagesCount) {
    //         return
    //     }else {
    //         pages.push(i)
    //     }
    // }
    const followChangerHandler = (userId: number, followed: boolean) => {
        props.followChanger(userId, followed)

    }
debugger
    return (
        <div>
            {props.users.map(m =>
                <div key={m.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile' + '/' + m.id}>
                                <img
                                    src={m.photos.small ? m.photos.small : 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg'}
                                    height={'100px'} width={'100px'}/>
                                    </NavLink>
                            </div>
                            <div>
                                    <button onClick={(e) => followChangerHandler(m.id, m.followed)}
                                            disabled={props.followingInProgress}>
                                        {m.followed ? 'Unfollow' : 'Follow'}
                                    </button>


                            </div>
                        </span>
                    <span>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </span>
                        <span>
                            <div>{m.followed ? 'Followed!!!' : "Nope"}</div>
                            <div>{'m.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
            <div className = {s.pagesBox}>
                <div className = {s.pages}>
                {pages.map(m => <span onClick={(e) => {
                    props.onPageChanged(m)
                }} className={props.currentPage === m ? s.selected : ''}>{m} </span>)}
                </div>
            </div>
        </div>
    )
}