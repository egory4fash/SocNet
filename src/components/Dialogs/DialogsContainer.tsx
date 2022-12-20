import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {DialogsType, MessagesType, RootStateType} from "../../redux/State";
import {addMessageAC} from "../../redux/DialogsReducer";
import {WithAuthRedirect} from '../../hoc/withAuthRedirect'

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    dialogsData: Array<DialogsType>,
    messagesData: Array<MessagesType>,
    isAuth:boolean
}

type mapDispatchToPropsType = {
addMessage:(text: string) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        isAuth:state.auth.isLogined
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage:(text:string) => {
            dispatch(addMessageAC(text))
        }
    }
}

 const DialogsContainer = compose<React.ComponentType>(
    connect<mapStateToPropsType,mapDispatchToPropsType,
        {},
        RootStateType >(mapStateToProps, mapDispatchToProps),
        WithAuthRedirect

) (Dialogs)

export default DialogsContainer

