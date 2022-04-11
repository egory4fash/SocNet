import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfilePageType, ProfileType, RootStateType} from "../../redux/State";
import {setUserProfile} from "../../redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {API} from "../../API/API";


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

        if (!userId) userId = '1'
        API.getProfile(userId).then(data => {
            this.props.setUserProfile(data.data)

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