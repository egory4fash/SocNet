import React from 'react'
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfilePageType, ProfileType, RootStateType} from "../../redux/State";
import {setUserProfile} from "../../redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


export type ProfilePagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    profile: ProfileType
}
export type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfilePageType) => void
}

export type ParamType = {
    userId: string
}
export type PropsType = RouteComponentProps<ParamType> & ProfilePagePropsType

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        console.log(this.props.match.params)
        let userId = this.props.match.params.userId

        if (!userId) userId = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(responce => {
            this.props.setUserProfile(responce.data)

        })
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        )
    }
}

let ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType,
    {},
    RootStateType>(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)