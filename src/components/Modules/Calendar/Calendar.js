import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
//import { formatDate } from '@fullcalendar/core'

export default class Calendar extends React.Component {
  handleDateClick = (arg) => { // bind with an arrow function
    this.props.clickEvent()
    //alert('TODO: create event here with selected date')
  }
    render() {

      return (
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          eventClick={this.props.clickEvent}
          dateClick={this.handleDateClick}
          height={845}
          displayEventEnd={true}
          events={[
            { title: 'event 1', start: '2020-07-13', end: '2020-07-14', color: 'rgba(34, 36, 38, 0.3)'},
            { title: 'event 2', start: '2020-07-13', end: '2020-07-14'}
          ]}
        />
      )
    }
  }