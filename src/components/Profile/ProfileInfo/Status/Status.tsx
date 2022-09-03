import React, {ChangeEvent} from 'react'
import {StatusPropsType} from "./StatusContainer";




class Status extends React.Component<StatusPropsType> {


    state = {
        editMode: false,
        status:this.props.status
    }

    editModeActivate = () => {
        this.setState({
            editMode: true,

        })
    }

    editModeDeactivate = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus( this.state.status===null ?'no status':this.state.status)
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState( {
            status:e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
           this.setState({
               status:this.props.status
           })
        }
    }


    render() {

        let statusValue = this.props.status === null ? "no status yet" : this.props.status

        return (
            <>
                {!this.state.editMode ?
                    <div>
                        status:
                        <div onDoubleClick={this.editModeActivate}>{statusValue || "------"}</div>
                    </div> :
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                               onBlur={this.editModeDeactivate}
                               value={this.state.status === null ?"" : this.state.status}/>
                    </div>
                }
            </>
        )
    }
}

export default Status