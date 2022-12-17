import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, RootStateType} from "../../redux/State";
import {getUserProfileThunkCreator, updateStatusThunkCreator} from "../../redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from 'redux';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


export type ProfilePagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    profile: ProfileType,
    status: string | null,
    id:number

}
export type mapDispatchToPropsType = {
    getUserProfileThunkCreator: (userId: string) => void
    updateStatusThunkCreator: (status: string) => void
}

export type ParamType = {
    userId: string
}
export type PropsType = RouteComponentProps<ParamType> & ProfilePagePropsType

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.serverStatus,
        id: state.auth.data.id

    }
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.id.toString()
        this.props.getUserProfileThunkCreator(userId)
    }

    render() {


        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusThunkCreator}/>
        )
    }
}


export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType,
        {},
        RootStateType>(mapStateToProps, {getUserProfileThunkCreator, updateStatusThunkCreator}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)