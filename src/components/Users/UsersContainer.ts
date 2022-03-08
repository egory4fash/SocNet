import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType, UsersType} from "../../redux/State";
import {Dispatch} from "redux";
import {changeFollowAC, setUsersAC} from "../../redux/UsersReducer";


export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users:UsersType
}
type mapDispatchToPropsType = {
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
    RootStateType >(mapStateToProps, mapDispatchToProps)(Users)