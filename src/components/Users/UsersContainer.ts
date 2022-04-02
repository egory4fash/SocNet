import {connect} from "react-redux";
import {RootStateType, UsersType} from "../../redux/State";
import {Dispatch} from "redux";
import {changeFollowAC, setCurrentPageAC, setTotalUsersAC, setUsersAC} from "../../redux/UsersReducer";
import usersClass from "./UsersClass";
import {Users} from "./Users";


export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    users:UsersType,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number
}
export type mapDispatchToPropsType = {
    changeFollow:(id:number) => void,
    setUsers:(users:UsersType) => void
    setCurrentPage:(currentPage:number) => void
    setTotalUsers:(totalUsers:number) => void
}

const mapStateToProps = (state: RootStateType):mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        changeFollow:(id:number) => {
            dispatch(changeFollowAC(id))
        },
        setUsers:(users:UsersType) => {
            dispatch(setUsersAC(users))
    },
        setCurrentPage:(currentPage:number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsers:(totalUsers:number ) => {
            dispatch(setTotalUsersAC(totalUsers))
        }
    }
}


export default connect<mapStateToPropsType,mapDispatchToPropsType,
    {},
    RootStateType >(mapStateToProps, mapDispatchToProps)(usersClass)