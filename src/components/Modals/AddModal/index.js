import React from 'react'
import './style.css'

class AddModal extends React.Component {
    state={
        isShown: this.props.isShown,
    }

    closeModal = () => {
        this.setState({
            isShown: false
        })
    }

    render() {
        if(this.state.isShown){
           return (
            <div className="modalOverlay">
                <div className=" modalWindow ui segments" style={{margin: '2.5% auto',position: 'relative'}}>
                    <div className=" modal-header ui segment" >
                        <span className="modal-title">Add new event</span>
                        <i className="material-icons modalClose" onClick={this.closeModal}>close</i>
                    </div>
                    <div className="modal-body ui segment">
                    <form className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" name="first-name"/>
                        </div>
                        <div className="field">
                            <label>Type</label>
                            <input type="text" name="last-name"/>
                        </div>
                        <hr/>
                        <button className="mini ui right floated button" type="submit">Submit</button>
                    </form>     
                    </div>
                </div>
            </div>  
           ) 
        }else{
            return null
        }
    }
}

export default AddModal