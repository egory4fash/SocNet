import React from "react";
import Header from "./Header";
import {AuthDataType, RootStateType,} from "../../redux/State";
import {connect} from "react-redux";
import {authDataThunkCreator} from "../../redux/AuthReducer";
import {Preloader} from "../Preloader/Preloader";



export type HeaderContainerProps = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    data: AuthDataType,
    isFetching: boolean
}
export type mapDispatchToPropsType = {

    authDataThunkCreator:() => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        data: state.auth.data,
        isFetching: state.auth.isFetching
    }
}

class HeaderContainer extends React.Component<HeaderContainerProps> {

    componentDidMount() {
        this.props.authDataThunkCreator()
    }

    render() {

        return (
            <>
                {!this.props.isFetching ?
                    <Header email={this.props.data?.email || 'padla'}
                            login={this.props.data?.login || 'rabotai'}/>
                    : <Preloader/>
                }
            </>
        )
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType,
    {},
    RootStateType>(mapStateToProps, {
    authDataThunkCreator
})(HeaderContainer)