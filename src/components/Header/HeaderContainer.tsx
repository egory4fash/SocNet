import React from "react";
import Header from "./Header";
import {AuthDataType, RootStateType,} from "../../redux/State";
import {connect} from "react-redux";
import { getAuthUserDataThunkCreator} from "../../redux/AuthReducer";



export type HeaderContainerProps = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    data: AuthDataType,
    isFetching: boolean
}
export type mapDispatchToPropsType = {
    getAuthUserDataThunkCreator: () => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        data: state.auth.data,
        isFetching: state.auth.isFetching
    }
}

class HeaderContainer extends React.Component<HeaderContainerProps> {

    componentDidMount() {
        this.props.getAuthUserDataThunkCreator()
    }

    render() {
        return (
            <>

                <Header email={this.props.data?.email || 'padla'}
                        login={this.props.data?.login || 'rabotai'}
                />


            </>
        )
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType,
    {},
    RootStateType>(mapStateToProps, {
    getAuthUserDataThunkCreator
})(HeaderContainer)