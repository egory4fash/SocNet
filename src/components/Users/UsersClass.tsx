import React from 'react'
import axios from "axios";
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import {UsersPresentation} from "./UsersPresentation";
import s from './UsersClass.module.css'
import loader from "./../../Assets/logo192.png"




type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class usersClassAPI extends React.Component<UsersPropsType> {

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
                <img src = {loader} alt = "loading" className = {s.loading}/>}
                </>
        )
    }
}

export default usersClassAPI