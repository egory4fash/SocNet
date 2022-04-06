import React from "react";
import Header from "./Header";
import {AuthDataType} from "../../redux/State";


export type HeaderContainerProps = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {

}
export type mapDispatchToPropsType = {
    setUserData : (data:AuthDataType) => void
}
class HeaderContainer extends React.Component<HeaderContainerProps> {
    render() {
        <Header/>
    }
}