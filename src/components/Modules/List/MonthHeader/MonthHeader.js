import React from "react";
import moment from "moment";
import axios from "axios";
import Table from "./Table/Table";
import { Segment, Label, Icon } from "semantic-ui-react";

class MonthHeader extends React.Component {
  state = {
    isShown: this.props.isShown,
    isFetched: this.props.isShown,
    events: [],
    eventAmount: this.props.amount,
    date: moment(this.props.name),
  };

  componentDidMount() {
    console.log("COMPONENTDIDMOUNT MONTH HEADER");
    const endDate = this.state.date.clone().endOf("month").format("YYYY-MM-DD");
    const startDate = this.state.date
      .clone()
      .startOf("month")
      .format("YYYY-MM-DD");
    const fetchEventAPI = `http://localhost:8083/v1/calendar/api/events?end=${endDate}T23%3A59%3A59&start=${startDate}T00%3A00%3A00`;
    if (this.state.isShown) {
      axios.get(fetchEventAPI).then((response) => {
        this.setState({
          events: response.data,
          isFetched: true,
        });
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("COMPONENTDIDUPDATE MONTH HEADER");
    const endDate = this.state.date.clone().endOf("month").format("YYYY-MM-DD");
    const startDate = this.state.date
      .clone()
      .startOf("month")
      .format("YYYY-MM-DD");
    const url = `http://localhost:8083/v1/calendar/api/events?end=${endDate}T23%3A59%3A59&start=${startDate}T00%3A00%3A00`;
    if (
      !this.state.isFetched &&
      this.state.isShown &&
      prevProps.isShown === false
    ) {
      console.log("COMPONENTDIDUPDATE OPENING");
      axios.get(url).then((response) => {
        console.log("DIDUPDATE FETCHED EVENTS");
        this.setState({
          events: response.data,
          isFetched: true,
        });
      });
    }
  }

  deleteEvent = (id) => {
    axios
      .delete(`http://localhost:8083/v1/calendar/api/events/${id}/delete`)
      .then((response) => {
        if (response.request.status === 200) {
          const events = [...this.state.events];
          events.splice(events.id, 1);
          this.setState({
            events: events,
          });
        }
      });
  };

  showContent = () => {
    this.setState({
      isShown: !this.state.isShown,
    });
  };

  render() {
    console.log(`RENDERED MONTH ${this.props.name}`);
    let chevron = this.state.isShown ? "chevron up" : "chevron down";
    return (
      <>
        <Segment name={this.props.name} onClick={this.showContent}>
          <Label color="red" size="tiny">
            Amount: {this.state.eventAmount}
          </Label>
          {this.state.date.format("YYYY MMMM")}
          <Icon name={chevron} style={{ float: "right" }}></Icon>
        </Segment>
        {this.state.isShown ? (
          <Table events={this.state.events} deleteEvent={this.deleteEvent} />
        ) : null}
      </>
    );
  }
}

export default MonthHeader;
