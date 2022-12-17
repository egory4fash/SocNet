import React from "react";
import s from "../UsersClass.module.css";
import {UsersType} from "../../../redux/State";
import {User} from "./User";


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

export const UserContainer = ({
                                  totalUsersCount,
                                  pageSize,
                                  currentPage,
                                  followChanger,
                                  followingInProgress,
                                  onPageChanged,
                                  users,


                              }: UsersPresentationPropsType) => {


    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages: number[] = [];
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i < 1 || i > pagesCount) {

        } else {
            pages.push(i)
        }
    }

    const followChangerHandler = (userId: number, followed: boolean) => {
        followChanger(userId, followed)
    }
    let mappedUsers = users.map((m) => {
        return (<div>
            {users.map(m =>
                <div key={m.id}>
                    <User user={m} followingInProgress={followingInProgress}
                          followChangerHandler={followChangerHandler}/>
                </div>)
            }

        </div>)
    })

    return (
        <>{mappedUsers}
            <div className={s.pagesBox}>
                <div className={s.pages}>
                    {pages.map(m => <span onClick={(e) => {
                        onPageChanged(m)
                    }} className={currentPage === m ? s.selected : ''}>{m} </span>)}
                </div>
            </div>
        </>
    )
}