import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, RootStateType} from "../../redux/State";
import {getUserProfileThunkCreator} from "../../redux/ProfileReducer";
import { RouteComponentProps, withRouter} from "react-router-dom";

import { compose } from 'redux';


export type ProfilePagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    profile: ProfileType,

}
export type mapDispatchToPropsType = {
    getUserProfileThunkCreator: (userId: string) => void
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
        if (!userId) userId = '22112'
        this.props.getUserProfileThunkCreator(userId)
    }

    render() {


        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        )
    }
}




export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType,
        {},
        RootStateType>(mapStateToProps, {getUserProfileThunkCreator}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)