import React from 'react'
import './AddEditModal.css'
import { Dropdown } from 'semantic-ui-react'
import {
    DateInput,
    TimeInput,
} from 'semantic-ui-calendar-react';

const tagOptions = [
    {
        key: 'Sport',
        text: 'Sport',
        value: 'Sport',
        label: { color: 'yellow', empty: true, circular: true },
    },
    {
        key: 'All Hands',
        text: 'All Hands',
        value: 'All Hands',
        label: { color: 'rgba(255, 60, 0, 0.5)', empty: true, circular: true },
    },
    {
        key: 'Travel',
        text: 'Travel',
        value: 'Travel',
        label: { color: 'black', empty: true, circular: true },
    },
]

class AddEditModal extends React.Component {
    state = {
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        dateTime: '',
        datesRange: '',
        date: '',
    };

    handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
    }

    render(){
        if(this.props.isShown){
            return (
            <div className="modalOverlay">
                <div className=" modalWindow ui segments" style={{margin: '2.5% auto',position: 'relative'}}>
                    <form className="ui form">
                    <div className="modal-header">
                        <h3 style={{display: 'inline'}}>New appointment</h3>
                        <i className="large close icon" style={{float: 'right', marginRight: "0px"}} onClick={this.props.closeModal}/>
                        <div className="ui icon input" style={{float: 'right', paddingRight: '20px'}}>
                            <input type="text" name="creator" placeholder="Creator"/>
                            <i className="user icon"/>  
                        </div>
                        
                        <div className="ui clearing divider"></div>
                    </div>
                    <div className="modal-body">

                        <div className="field">
                            <label>Title</label>
                            <input type="text" name="title"/>
                        </div>
                        <div className="field">
                            <label>Type</label>
                            <Dropdown placeholder='Type' selection scrolling options={tagOptions} />
                        </div>
                        <div className="field" style={{marginBottom: "0px"}}>
                            <label>Star/End Time</label>
                            <div className="four fields" style={{marginBottom: "0px"}}>
                                <DateInput
                                            name="startDate"
                                            placeholder="Date"
                                            value={this.state.startDate}
                                            iconPosition="left"
                                            onChange={this.handleChange}
                                            closable
                                            animation='none'
                                />
                                <TimeInput
                                            name="startTime"
                                            placeholder="Date"
                                            value={this.state.startTime}
                                            iconPosition="left"
                                            onChange={this.handleChange}
                                            closable
                                            animation='none'
                                />
                                <p>:</p>
                                <DateInput
                                            name="endDate"
                                            placeholder="Date"
                                            value={this.state.endDate}
                                            iconPosition="left"
                                            onChange={this.handleChange}
                                            closable
                                            animation='none'
                                />
                                <TimeInput
                                            name="endTime"
                                            placeholder="Date"
                                            value={this.state.endTime}
                                            iconPosition="left"
                                            onChange={this.handleChange}
                                            closable
                                            animation='none'
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label>Location</label>
                            <input type="text" name="location"/>
                        </div>
                        <div className="field">
                            <label>Notes</label>
                            <textarea type="text" name="notes" rows="2"/>
                        </div>
                        <div className="field">
                            <label>Attendees:</label>
                        </div>
                        <div className="ui clearing divider"></div>
                        <button className="mini ui right floated button" type="submit">Submit</button>
 
                    </div>
                    </form>    
                </div>
            </div>  
            ) 
        }else{
            return null
        }
    }
            
        
    }

export default AddEditModal