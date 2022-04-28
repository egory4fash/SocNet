import {connect} from "react-redux";
import {RootStateType, UsersType} from "../../redux/State";
import {
    changeFollow,
    followingInProgressHandler, followThunkCreator,
    getUsersThunkCreator,
    onPageChangeThunkCreator, unFollowThunkCreator,
} from "../../redux/UsersReducer";
import React from "react";
import {UsersPresentation} from "./UsersPresentation";
import {Preloader} from "../Preloader/Preloader";



export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    users: UsersType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: boolean
}
export type mapDispatchToPropsType = {
    changeFollow: (id: number) => void,
    followingInProgressHandler: (followingInProgress: boolean) => void,
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void,
    onPageChangeThunkCreator: (currentPage: number, pageSize: number) => void,
    unFollowThunkCreator: (userId: number, followed: boolean) => void,
    followThunkCreator: (userId: number, followed: boolean) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,


    }
}

class usersClassAPI extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number,) => {
        this.props.onPageChangeThunkCreator(pageNumber, this.props.pageSize)
    }

    followChanger = (userId: number, followed: boolean) => {
        followed ? this.props.unFollowThunkCreator(userId,followed) : this.props.followThunkCreator(userId, followed)
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
                        followChanger={this.followChanger}
                        followingInProgress={this.props.followingInProgress}
                        followingInProgressHandler={this.props.followingInProgressHandler}
                    /> :
                    <Preloader/>}
            </>
        )
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>
(mapStateToProps, {
    changeFollow,
    followingInProgressHandler,
    getUsersThunkCreator,
    onPageChangeThunkCreator,
    unFollowThunkCreator,
    followThunkCreator
})(usersClassAPI)