import React from 'react'
import './AddEditModal.css'
import { Dropdown } from 'semantic-ui-react'
import Attendees from '../AddEditModal/Attendees/Attendees'
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
                        <div className="modal-header ui right aligned grid" style={{margin: '0px'}}>
                            <div className="left floated left aligned four wide column" style={{margin: '0px'}}>
                                <h3>New appointment</h3>
                            </div>
                            <div className="left floated left aligned two wide column">
                                <Dropdown placeholder='Type'  scrolling options={tagOptions} />
                            </div>
                            <div className="right floated center aligned two wide column" style={{padding: '10px'}}>
                                <div className="ui left icon input focus" style={{float: 'right', paddingRight: '20px'}}>
                                    <i className="user icon"/>  
                                    <input type="text" name="creator" placeholder="Creator"/>                           
                                </div>   
                            </div>
                            <div className="right floated right aligned one wide column" style={{margin: '0px'}}>
                                <i className="large close icon" style={{float: 'right', marginRight: "0px", color: 'grey'}} onClick={this.props.closeModal}/>
                            </div>
                        </div>
                        <div className="modal-body">
                        <div class="ui grid">
                            <div class="twelve wide column">
                                <div class="ui grid">
                                    <div class="twelve wide column">
                                        <div className="field">
                                            <label>Title</label>
                                            <input type="text" name="title"/>
                                        </div>
                                    </div>
                                    <div class="two wide column">
                                        <div className="field">
                                            <label>Title</label>
                                            <input type="text" name="title"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
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
                                <textarea type="text" name="notes" rows="9"/>
                            </div>
                            </div>
                            <div class="four wide column">
                                <div className="field" >
                                     <Attendees />
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="modal-footer">
                            <button className="mini ui right floated button">Custom</button>
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