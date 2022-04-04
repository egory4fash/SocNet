import {connect} from "react-redux";
import {RootStateType, UsersType} from "../../redux/State";
import {Dispatch} from "redux";
import {
    changeFetching,
    changeFollow,
    setCurrentPage,
    setTotalUsers,
    setUsers
} from "../../redux/UsersReducer";
import usersClass from "./UsersClass";
import {Users} from "./Users";


export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    users:UsersType,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    isFetching:boolean
}
export type mapDispatchToPropsType = {
    changeFollow:(id:number) => void,
    setUsers:(users:UsersType) => void
    setCurrentPage:(currentPage:number) => void
    setTotalUsers:(totalUsers:number) => void
    changeFetching:(isFetching:boolean) => void
}

const mapStateToProps = (state: RootStateType):mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         changeFollow:(id:number) => {
//             dispatch(changeFollowAC(id))
//         },
//         setUsers:(users:UsersType) => {
//             dispatch(setUsersAC(users))
//     },
//         setCurrentPage:(currentPage:number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsers:(totalUsers:number ) => {
//             dispatch(setTotalUsersAC(totalUsers))
//         },
//         changeFetching:(isFetching:boolean) => {
//             dispatch(changeFetchingAC(isFetching))
//         }
//     }
// }


export default connect<mapStateToPropsType,mapDispatchToPropsType,
    {},
    RootStateType >(mapStateToProps, {
    changeFollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    changeFetching,

})(usersClass)