import {connect} from "react-redux";
import {RootStateType, UsersType} from "../../redux/State";
import {
    changeFetching,
    changeFollow, followingInProgressHandler,
    setCurrentPage,
    setTotalUsers,
    setUsers
} from "../../redux/UsersReducer";
import React from "react";
import {UsersPresentation} from "./UsersPresentation";
import {Preloader} from "../Preloader/Preloader";
import {API} from "../../API/API";


export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    users: UsersType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress:boolean
}
export type mapDispatchToPropsType = {
    changeFollow: (id: number) => void,
    setUsers: (users: UsersType) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsers: (totalUsers: number) => void
    changeFetching: (isFetching: boolean) => void
    followingInProgressHandler: (followingInProgress:boolean) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

class usersClassAPI extends React.Component<UsersPagePropsType> {

    componentDidMount() {



        this.props.changeFetching(true)

        API.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.changeFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsers(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.changeFetching(true)
        API.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.changeFetching(false)

        })
    }

     followChanger = (userId: number, followed: boolean) => {
        if (followed) {
            this.props.followingInProgressHandler(true)
            API.unfollow(userId).then(data => {
                if (data.resultCode === 0) {
                    this.props.changeFollow(userId)
                }
            }).finally(() => this.props.followingInProgressHandler(false))

        } else {
            this.props.followingInProgressHandler(true)
            API.follow(userId).then
            (data => {
                if (data.resultCode === 0) {
                    this.props.changeFollow(userId)
                }
            }).finally(() => this.props.followingInProgressHandler(false))
        }
    }


    render() {
        return (
            <>
                {!this.props.isFetching ?
                    <UsersPresentation
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        changeFollow={this.props.changeFollow}
                        isFetching={this.props.isFetching}
                        followChanger = {this.followChanger}
                        followingInProgress = {this.props.followingInProgress}
                        followingInProgressHandler = {this.props.followingInProgressHandler}
                    /> :
                    <Preloader/>}
            </>
        )
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>
(mapStateToProps, {
    changeFollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    changeFetching,
    followingInProgressHandler
})(usersClassAPI)