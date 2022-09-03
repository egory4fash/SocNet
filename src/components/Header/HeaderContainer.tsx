import React from "react";
import Header from "./Header";
import {AuthDataType, RootStateType,} from "../../redux/State";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator, logOutThunkCreator} from "../../redux/AuthReducer";



export type HeaderContainerProps = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    data: AuthDataType,
    isFetching: boolean,
    isLogined: boolean
}
export type mapDispatchToPropsType = {
    getAuthUserDataThunkCreator: () => void,
    logOutThunkCreator: () => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        data: state.auth.data,
        isFetching: state.auth.isFetching,
        isLogined:state.auth.isLogined
    }
}

class HeaderContainer extends React.Component<HeaderContainerProps> {

    //

    render() {
        return (
            <>

                <Header email={this.props.data?.email || ''}
                        login={this.props.data?.login || ''}
                        isLogined={this.props.isLogined}
                        logOut = {this.props.logOutThunkCreator}
                />


            </>
        )
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType,
    {},
    RootStateType>(mapStateToProps, {
    getAuthUserDataThunkCreator,logOutThunkCreator
})(HeaderContainer)