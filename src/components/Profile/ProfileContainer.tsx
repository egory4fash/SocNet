import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, RootStateType} from "../../redux/State";
import {getProfileThunkCreator} from "../../redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


export type ProfilePagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    profile: ProfileType
}
export type mapDispatchToPropsType = {
    getProfileThunkCreator: (userId: string) => void
}

export type ParamType = {
    userId: string
}
export type PropsType = RouteComponentProps<ParamType> & ProfilePagePropsType

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) userId = '1'
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        return (

            <Profile
                     profile={this.props.profile}/>
        )
    }
}

let ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType,
    {},
    RootStateType>(mapStateToProps, {getProfileThunkCreator})(ProfileContainerWithRouter)