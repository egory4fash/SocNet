import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, RootStateType} from "../../redux/State";
import {getUserProfileThunkCreator} from "../../redux/ProfileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";



export type ProfilePagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    profile: ProfileType,
    isLogined:boolean
}
export type mapDispatchToPropsType = {
    getUserProfileThunkCreator:(userId:string) => void
}

export type ParamType = {
    userId: string
}
export type PropsType = RouteComponentProps<ParamType> & ProfilePagePropsType

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isLogined: state.auth.isLogined
    }
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId

        if (!userId) userId = '1'
        this.props.getUserProfileThunkCreator(userId)
    }

    render() {

        if (!this.props.isLogined) return <Redirect to='/login' />

        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        )
    }
}

let ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType,
    {},
    RootStateType>(mapStateToProps, {getUserProfileThunkCreator})(ProfileContainerWithRouter)