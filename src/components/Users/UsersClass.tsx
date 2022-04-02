import React from 'react'
import axios from "axios";
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import s from './UsersClass.module.css'


type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class usersClass extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsers(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1;i <= pagesCount;i++) {
            pages.push(i)
        }



        return (
            <div>
                <div>
                    {pages.map( m => <span onClick={ (e) => {this.onPageChanged(m)}} className =  {this.props.currentPage === m ? s.selected : ''}>{m} </span> )}
                </div>
                {this.props.users.map(m =>
                    <div key={m.id}>
                        <span>
                            <div>
                                <img src={m.photos.small ? m.photos.small : ''}/>
                            </div>
                            <div>
                                {m.followed ?
                                    <button onClick={(e) => this.props.changeFollow(m.id)}>Follow</button>
                                    : <button onClick={(e) => this.props.changeFollow(m.id)}>Unfollow</button>
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

}

export default usersClass