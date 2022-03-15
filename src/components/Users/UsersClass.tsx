import React from 'react'
import axios from "axios";
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import s from 'UsersClass.module.css'


type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class usersClass extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div>
                <div>
                    <span>1</span>
                    <span className = {s.selected}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {this.props.users.map(m =>
                    <div key={m.id}>
                        <span>
                            <div>
                                <img src={m.photoURL}/>
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
                            <div>{m.fullName}</div>
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