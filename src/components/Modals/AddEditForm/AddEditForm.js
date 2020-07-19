import React from "react";
import "./AddEditForm.css";
import { Dropdown, Input, TextArea, Icon, Button } from "semantic-ui-react";
import Attendees from "./Attendees/Attendees";
import { DateInput, TimeInput } from "semantic-ui-calendar-react";
import moment from "moment";
import axios from "axios";

const tagOptions = [
  {
    key: "Sport",
    text: "Sport",
    value: "Sport",
    label: { color: "yellow", empty: true, circular: true },
  },
  {
    key: "All Hands",
    text: "All Hands",
    value: "All Hands",
    label: { color: "blue", empty: true, circular: true },
  },
  {
    key: "Travel",
    text: "Travel",
    value: "Travel",
    label: { color: "black", empty: true, circular: true },
  },
];
//YYYY-MM-DDThh:mm
class AddEditForm extends React.Component {
  state = {
    title: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    location: "",
    notes: "",
    creator: "",
    eventType: "",
    attendees: [],
    isShown: this.props.isShown,
  };

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  removeAttendeeHandler = (id) => {
    const attendees = [...this.state.attendees];
    attendees.splice(id, 1);
    this.setState({
      attendees: attendees,
    });
  };

  addAttendeeHandler = (event) => {
    console.log("CALLING ADDING ATTENDEE");
    if (event.key === "Enter" && event.target.value) {
      const attendees = [...this.state.attendees];
      attendees.unshift(event.target.value);
      this.setState({
        attendees: attendees,
      });
      event.target.value = "";
    }
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  /*submitForm = (event) => {
    event.preventDefault();
    console.log("SUBMITING");
    const eventData = {
      title: this.state.title,
      startTime: `${this.state.startDate}T${this.state.startTime}`,
      endTime: `${this.state.endDate}T${this.state.endTime}`,
      attendees: this.state.attendees,
      location: this.state.location,
      evnet_info_id: 21,
    };
    axios
      .post("http://localhost:8083/v1/calendar/api/events/create", eventData)
      .then((response) => {
        if (response.request.status === 200) {
          console.log("EVENT WAS CREATED");
          this.setState({
            isShown: false,
          });
        }
      });
  };*/

  componentDidUpdate(prevProps, prevState) {
    if (prevState.startTime === "" && this.state.startTime) {
      const endTime = moment(this.state.startTime, "hh:mm")
        .add(1, "hour")
        .format("hh:mm");
      this.setState({
        endTime: endTime,
      });
    }
    if (prevState.startDate === "" && this.state.startDate) {
      console.log(
        "Here should be set endDate",
        prevState.startDate,
        this.state.startDate
      );
      this.setState({
        endDate: this.state.startDate,
      });
    }
  }

  render() {
    console.log(this.state.isShown);
    console.log("RENDERED MODAL");
    if (this.state.isShown) {
      return (
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="modal-overlay">
            <div className="modal-window">
              <div className="modal-header">
                <h3 className="header-title">Add appointment</h3>
                <div className="eventType-indicator"></div>
                <Icon
                  name="close"
                  className="close-button"
                  onClick={this.props.closeModal}
                />
              </div>

              <div className="modal-body">
                <div
                  className="ui grid"
                  style={{ width: "100%", margin: "auto" }}
                >
                  <div className="twelve wide column">
                    <div className="fields">
                      <div className="twelve wide field">
                        <label>Title</label>
                        <Input
                          type="text"
                          name="title"
                          autoComplete="off"
                          onChange={(e) => this.handleChange(e, e.target)}
                          value={this.state.title}
                        />
                      </div>
                      <div className="four wide field">
                        <label>Type</label>
                        <Dropdown
                          placeholder="Type"
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
                      <div
                        className="four fields"
                        style={{ marginBottom: "0px" }}
                      >
                        <DateInput
                          name="startDate"
                          placeholder="Date"
                          value={this.state.startDate}
                          dateFormat="YYYY-MM-DD"
                          iconPosition="left"
                          onChange={this.handleChange}
                          closable
                          animation="none"
                          autoComplete="off"
                          localization="cz"
                        />
                        <TimeInput
                          name="startTime"
                          placeholder="Time"
                          value={this.state.startTime}
                          iconPosition="left"
                          onChange={this.handleChange}
                          closable
                          animation="none"
                          autoComplete="off"
                        />
                        <DateInput
                          name="endDate"
                          placeholder="Date"
                          value={this.state.endDate}
                          dateFormat="YYYY-MM-DD"
                          iconPosition="left"
                          onChange={this.handleChange}
                          closable
                          animation="none"
                          autoComplete="off"
                          localization="cz"
                        />
                        <TimeInput
                          name="endTime"
                          placeholder="Time"
                          value={this.state.endTime}
                          iconPosition="left"
                          onChange={this.handleChange}
                          closable
                          animation="none"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label>Location</label>
                      <Input
                        type="text"
                        name="location"
                        autoComplete="off"
                        onChange={(e) => this.handleChange(e, e.target)}
                        value={this.state.location}
                      />
                    </div>
                    <div className="field">
                      <label>Notes</label>
                      <TextArea
                        type="text"
                        name="notes"
                        autoComplete="off"
                        rows="11"
                        onChange={(e) => this.handleChange(e, e.target)}
                        value={this.state.notes}
                      />
                    </div>
                  </div>
                  <div className="four wide column">
                    <div className="field">
                      <Attendees
                        addNewAttendee={this.addAttendeeHandler}
                        attendees={this.state.attendees}
                        removeAttendee={this.removeAttendeeHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <div className="ui left icon input creator">
                  <i className="user icon" />
                  <input
                    type="text"
                    name="creator"
                    placeholder="Creator"
                    autoComplete="off"
                    onChange={(e) => this.handleChange(e, e.target)}
                    value={this.state.creator}
                  />
                </div>
                <Button
                  className="submit-button"
                  onClick={(event) => this.props.submit(event, this.state)}
                  type="button" //prevent sending data
                >
                  Create
                </Button>
              </div>
            </div>
          </div>
        </form>
      );
    } else {
      return null;
    }
  }
}

export default AddEditForm;
