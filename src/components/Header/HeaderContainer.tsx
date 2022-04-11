import React from "react";
import Header from "./Header";
import {AuthDataType, RootStateType,} from "../../redux/State";
import {connect} from "react-redux";
import {changeAuthFetching, setUserData} from "../../redux/AuthReducer";
import {Preloader} from "../Preloader/Preloader";
import {API} from "../../API/API";


export type HeaderContainerProps = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    data: AuthDataType,
    isFetching: boolean
}
export type mapDispatchToPropsType = {
    setUserData: (data: AuthDataType) => void
    changeAuthFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        data: state.auth.data,
        isFetching: state.auth.isFetching
    }
}

class HeaderContainer extends React.Component<HeaderContainerProps> {

    componentDidMount() {
        API.auth().then(data => {
            this.props.setUserData(data.data)
            this.props.changeAuthFetching(false)
        })
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
    setUserData,
    changeAuthFetching
})(HeaderContainer)