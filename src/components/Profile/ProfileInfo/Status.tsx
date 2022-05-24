import React, {useState} from 'react'


type StatusPropsType = {
    status:string | null
}

 class Status extends React.Component<StatusPropsType>  {

    state = {
        editMode:false
    }

     editModeActivate = () => {
        debugger
         console.log(this)
        this.setState({
            editMode:true
        })
    }

     editModeDeactivate = () => {
         this.setState({
             editMode:false
         })
     }


    render() {
    return (
        <>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.editModeActivate}>{this.props.status}</span>
                </div> :
                <div>
                    <input autoFocus={true} onBlur={this.editModeDeactivate} value={this.props.status? this.props.status:"no status"}/>
                </div>
            }
        </>
    )}
}

export  default Status