import React, {ChangeEvent} from 'react'


type StatusPropsType = {
    status: string | null,
    updateStatus:(status:string) => void
}

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


    render() {
        let statusValue = this.props.status === null ? "no status yet" : this.state.status

        return (
            <>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.editModeActivate}>{statusValue}</span>
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