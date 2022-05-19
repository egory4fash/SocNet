import React, {useState} from 'react'

 class Status extends React.Component<any, any>  {

    state = {
        editMode:false
    }

     editModeActivate() {
        this.setState({
            editMode:true
        })
    }

     editModeDeactivate() {
         this.setState({
             editMode:false
         })
     }


    render() {
    return (
        <>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.editModeActivate.bind(this)}>{this.props.status}</span>
                </div> :
                <div>
                    <input autoFocus={true} onBlur={this.editModeDeactivate.bind(this)} value={this.props.status}/>
                </div>
            }
        </>
    )}
}

export  default Status