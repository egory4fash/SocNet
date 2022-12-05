import {connect} from "react-redux";
import {RootStateType, UsersType} from "../../redux/State";
import {
    changeFollow, fetchFollowThunkCreator,
    followingInProgressHandler,
    getUsersThunkCreator,
    onPageChangeThunkCreator
} from "../../redux/UsersReducer";
import React from "react";
import {UsersPresentation} from "./UsersPresentation";
import {Preloader} from "../Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsers,
    totalUsersCount
} from "../../redux/UsersSelector";




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
    fetchFollowThunkCreator:(usedId:number,followed:boolean,APIMethod:any) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),


    }
}

class usersClassAPI extends React.Component<UsersPagePropsType> {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChangeThunkCreator(pageNumber, this.props.pageSize)
    }

    followChanger = (userId: number, followed: boolean) => {
        followed ? this.props.fetchFollowThunkCreator(userId,followed,'unfollow') : this.props.fetchFollowThunkCreator(userId,followed,'follow')
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




export default compose<React.ComponentType> (
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>
    (mapStateToProps, {
        changeFollow,
        followingInProgressHandler,
        getUsersThunkCreator,
        onPageChangeThunkCreator,
        fetchFollowThunkCreator
    }),
    WithAuthRedirect
) (usersClassAPI)