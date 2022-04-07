import React from "react";
import Header from "./Header";
import {AuthDataType, AuthGlobalDataType, } from "../../redux/State";
import {connect} from "react-redux";
import axios from "axios";
import {setUserData} from "../../redux/AuthReducer";


export type HeaderContainerProps = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    data:AuthDataType
}
export type mapDispatchToPropsType = {
    setUserData : (data:AuthDataType) => void
}

const mapStateToProps = (state: AuthGlobalDataType): mapStateToPropsType => {
    return {
        data:state.data


    }
}

class HeaderContainer extends React.Component<HeaderContainerProps> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true}).then(responce => {
            this.props.setUserData(responce.data)
            debugger
    })
    }

    render() {
        return (
        <Header />
        )}
}


export default connect<mapStateToPropsType, mapDispatchToPropsType,
    {},
    AuthGlobalDataType>(mapStateToProps, {setUserData})(HeaderContainer)