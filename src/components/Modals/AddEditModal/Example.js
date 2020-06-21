import React from 'react'
import './Example.css'
import {Dropdown} from 'semantic-ui-react'
import Attendees from '../AddEditModal/Attendees/Attendees'
import {
    DateInput,
    TimeInput,
} from 'semantic-ui-calendar-react';
import moment from 'moment'

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
        label: { color: 'blue', empty: true, circular: true },
    },
    {
        key: 'Travel',
        text: 'Travel',
        value: 'Travel',
        label: { color: 'black', empty: true, circular: true },
    },
]

class Header extends React.Component {
    state={
        title: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        location: '',
        notes: '',
        creator: '',
        eventType: '',
        attendees: [],
    }

    handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
    }

    removeAttendeeHandler= (id) => {
        const attendees = [...this.state.attendees]
        attendees.splice(id, 1)
        this.setState({
            attendees: attendees
        })
    }


    addAttendeeHandler = (e) => {
        if(e.key === 'Enter' && e.target.value){
            const attendees = [...this.state.attendees]
            attendees.unshift(e.target.value)
            this.setState({
                attendees: attendees
            })
            e.target.value = ''
        }
    }

    handler = (event) => {
        event.preventDefault()
    }

    componentDidUpdate(prevProps, prevState){
        console.log(this.state)
        //console.log(prevProps, prevState)
        if(prevState.startTime === "" && this.state.startTime){
            const endTime = moment(this.state.startTime, 'hh:mm').add(1, 'hour').format('hh:mm')
            this.setState({
                endTime: endTime
            })
        }
        if(prevState.startDate === "" && this.state.startDate){
            console.log('Here should be set endDate', prevState.startDate, this.state.startDate)
            this.setState({
                endDate: this.state.startDate
            })
        }
    }

    render(){
        return(
            <form className="ui form" onSubmit={this.handler}>
                <div className="modal-overlay">
                    <div className="modal-window">
                        <div className="modal-header">
                            <h3 className="header-title">Add appointment</h3> 
                            <div className="eventType-indicator"></div>
                            <i className="close icon close-button" onClick={this.props.closeModal}/>
                        </div>





                        <div className="modal-body">
                            <div className="ui grid">
                                <div className="twelve wide column">
                                    <div className="fields">
                                        <div className="twelve wide field">
                                            <label>Title</label>
                                            <input 
                                                type="text"
                                                name="title"
                                                onChange={(e)=>this.handleChange(e, e.target)}
                                                value={this.state.title} 
                                            />
                                        </div>
                                        <div className="four wide field">
                                            <label>Type</label>
                                            <Dropdown 
                                                placeholder='Type' 
                                                selection 
                                                fluid 
                                                options={tagOptions} 
                                                name="eventType" 
                                                onChange={this.handleChange} 
                                                value={this.state.eventType}
                                            />
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
                                                autoComplete="off"
                                            />
                                            <TimeInput
                                                name="startTime"
                                                placeholder="Time"
                                                value={this.state.startTime}
                                                iconPosition="left"
                                                onChange={this.handleChange}
                                                closable
                                                animation='none'
                                                autoComplete="off"
                                            />
                                            <DateInput
                                                name="endDate"
                                                placeholder="Date"
                                                value={this.state.endDate}
                                                iconPosition="left"
                                                onChange={this.handleChange}
                                                closable
                                                animation='none'
                                                autoComplete="off"
                                            />
                                            <TimeInput
                                                name="endTime"
                                                placeholder="Time"
                                                value={this.state.endTime}
                                                iconPosition="left"
                                                onChange={this.handleChange}
                                                closable
                                                animation='none'
                                                autoComplete="off"
                                            />
                                        </div>
                                    </div>
                                        <div className="field">
                                            <label>Location</label>
                                            <input 
                                                type="text"
                                                name="location"
                                                onChange={(e)=>this.handleChange(e, e.target)}
                                                value={this.state.location} 
                                            />
                                        </div>
                                        <div className="field">
                                            <label>Notes</label>
                                            <textarea
                                                type="text" 
                                                name="notes" 
                                                rows="11"
                                                onChange={(e)=>this.handleChange(e, e.target)}
                                                value={this.state.notes} 
                                            />
                                        </div>
                                    </div>
                                <div className="four wide column">
                                    <div className="field">
                                        <Attendees addNewAttendee={this.addAttendeeHandler} attendees={this.state.attendees} removeAttendee={this.removeAttendeeHandler}/>
                                    </div>                                  
                                </div>
                            </div>
                        </div>




                        <div className="modal-footer">
                            <div className="ui left icon input creator">
                                <i className="user icon"/>  
                                <input type="text" 
                                    name="creator" 
                                    placeholder="Creator" 
                                    autoComplete="off"
                                    onChange={(e)=>this.handleChange(e, e.target)}
                                    value={this.state.creator} 
                                />                           
                            </div>  
                            <button className="ui button submit-button" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Header