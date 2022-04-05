import React from 'react'
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {PostsType, ProfilePageType, ProfileType, RootStateType, UsersType} from "../../redux/State";
import {addPost, setUserProfile, updateMessage} from "../../redux/ProfileReducer";


export type ProfilePagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    profile: ProfileType
}

export type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfilePageType) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}


class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(responce => {
            this.props.setUserProfile(responce.data)
            debugger
        })
    }

    render() {
        return (
            <Profile {...this.props}
            profile = {this.props.profile}/>
        )
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType,
    {},
    RootStateType>(mapStateToProps, {setUserProfile})(ProfileContainer)