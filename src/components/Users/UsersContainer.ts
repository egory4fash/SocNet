import {connect} from "react-redux";
import {RootStateType, UsersType} from "../../redux/State";
import {Dispatch} from "redux";
import {changeFollowAC, setUsersAC} from "../../redux/UsersReducer";
import usersClass from "./UsersClass";
import {Users} from "./Users";


export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    users:UsersType
}
export type mapDispatchToPropsType = {
    changeFollow:(id:number) => void,
    setUsers:(users:UsersType) => void
}

const mapStateToProps = (state: RootStateType):mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        changeFollow:(id:number) => {
            dispatch(changeFollowAC(id))
        },
        setUsers:(users:UsersType) => {
            dispatch(setUsersAC(users))
    }
    }
}


export default connect<mapStateToPropsType,mapDispatchToPropsType,
    {},
    RootStateType >(mapStateToProps, mapDispatchToProps)(usersClass)