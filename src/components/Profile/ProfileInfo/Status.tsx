import React from 'react'


type StatusPropsType = {
    status: string | null
}

class Status extends React.Component<StatusPropsType> {

    state = {
        editMode: false
    }

    editModeActivate = () => {
        this.setState({
            editMode: true
        })
    }

    editModeDeactivate = () => {
        this.setState({
            editMode: false
        })
    }


    render() {
        let statusValue = this.props.status === null ? "no status yet" : this.props.status
        return (
            <>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.editModeActivate}>{statusValue}</span>
                    </div> :
                    <div>
                        <input autoFocus={true} onBlur={this.editModeDeactivate}
                               value={statusValue}/>
                    </div>
                }
            </>
        )
    }
}

export default Status