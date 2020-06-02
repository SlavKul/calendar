import React from 'react'
import './AddEditModal.css'

class AddEditModal extends React.Component {


render(){
    if(this.props.isShown){
        return (
         <div className="modalOverlay">
             <div className=" modalWindow ui segments" style={{margin: '2.5% auto',position: 'relative'}}>
                 <div className=" modal-header ui segment" >
                     <span className="modal-title">Add new event</span>
                     <i className="material-icons modalClose" onClick={this.props.closeModal}>close</i>
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
                     <div className="ui clearing divider"></div>
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

export default AddEditModal