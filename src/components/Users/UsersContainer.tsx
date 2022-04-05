import {connect} from "react-redux";
import {RootStateType, UsersType} from "../../redux/State";
import {
    changeFetching,
    changeFollow,
    setCurrentPage,
    setTotalUsers,
    setUsers
} from "../../redux/UsersReducer";
import React from "react";
import axios from "axios";
import {UsersPresentation} from "./UsersPresentation";
import {Preloader} from "../Preloader/Preloader";


export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    users:UsersType,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    isFetching:boolean
}
export type mapDispatchToPropsType = {
    changeFollow:(id:number) => void,
    setUsers:(users:UsersType) => void
    setCurrentPage:(currentPage:number) => void
    setTotalUsers:(totalUsers:number) => void
    changeFetching:(isFetching:boolean) => void
}

const mapStateToProps = (state: RootStateType):mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

class usersClassAPI extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        this.props.changeFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.changeFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsers(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.changeFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.changeFetching(false)
        })
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
        changeFollow = {this.props.changeFollow}
        isFetching = {this.props.isFetching}
        /> :
        <Preloader />}
        </>
    )
    }
}


export default connect<mapStateToPropsType,mapDispatchToPropsType, {}, RootStateType >
(mapStateToProps, {
    changeFollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    changeFetching,
})(usersClassAPI)