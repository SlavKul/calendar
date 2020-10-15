import React, { useEffect, useContext } from "react";
import useAxios from "axios-hooks";
import ListView from "./Modules/List/ListView";
import Header from "./Modules/Header/Header";
import AddEditForm from "./Modals/AddEditForm/AddEditForm";
import moment from "moment";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import ApptDetails from "./Modals/ApptDetails/ApptDetails";
import Calendar from "./Modules/Calendar/Calendar";
import Event from "./Modules/List/Event/Event";
import { CalendarContext } from "./App.definitions";
import { useFetchEvents } from "./App.utils";
/*class App extends React.Component {
  state = {
    currentDate: moment().locale("cz"),
    isFetched: false,
    events: [],
    isAddModalOpen: false,
  };

  componentDidMount() {
    const start = this.state.currentDate
      .clone()
      .subtract(1, "month")
      .startOf("month")
      .format("YYYY-MM-DDThh:mm");
    const end = this.state.currentDate
      .clone()
      .add(5, "year")
      .startOf("month")
      .format("YYYY-MM-DDThh:mm");
    axios.get(`/events/map?end=${end}&start=${start}`).then((response) => {
      console.log("REFETCHED AGAIN");
      console.log(response.data)
      this.setState({
        events: response.data,
        isFetched: true,
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const start = this.state.currentDate
      .clone()
      .subtract(1, "month")
      .startOf("month")
      .format("YYYY-MM-DDThh:mm");
    const end = this.state.currentDate
      .clone()
      .add(5, "year")
      .startOf("month")
      .format("YYYY-MM-DDThh:mm");
    if (prevState.isFetched === true && this.state.isFetched === false) {
      axios.get(`/events/map?end=${end}&start=${start}`).then((response) => {
        this.setState({
          events: response.data,
          isFetched: true,
        });
      });
    }
  }

  submitForm = (event, data) => {
    event.preventDefault();
    console.log("SUBMITING");
    console.log(data);
    const eventData = {
      title: data.title,
      startTime: `${data.startDate}T${data.startTime}`,
      endTime: `${data.endDate}T${data.endTime}`,
      attendees: data.attendees,
      location: data.location,
      evnet_info_id: 21,
    };
    axios.post("/events/create", eventData).then((response) => {
      if (response.request.status === 200) {
        console.log("EVENT WAS CREATED");
        this.setState({
          isFetched: false,
          isAddModalOpen: false,
        });
      }
    });
  };

  openAddModalHandler = (event) => {
    event.preventDefault();
    console.log("Opening...");
    this.setState({
      isAddModalOpen: true,
    });
  };

  closeModal = () => {
    console.log("Closing...");
    this.setState({
      isAddModalOpen: false,
    });
  };

  clickHandle = (e) => {
    console.log(e);
    this.setState({
      isAddModalOpen: true,
    });
  };

  render() {
    console.log(this.state.events);
    console.log("RENDER APP");
    return (
      <BrowserRouter>
        <Header
          date={this.state.currentDate}
          openModal={this.openAddModalHandler}
        >
          <Route
            path="/list"
            render={() => <ListView />}
          />
          <Route
            path="/calendar"
            render={() => <Calendar clickEvent={this.clickHandle} />}
          />
          <Route
            path="/history"
            render={() => <h1>Here should be HISTORY PAGE</h1>}
          />
        </Header>
        {this.state.isAddModalOpen ? (
          <AddEditForm
            isShown={this.state.isAddModalOpen}
            closeModal={this.closeModal}
            submit={this.submitForm}
          />
        ) : null}
        
      </BrowserRouter>
    );
  }
}*/

const App: React.FC = () => {
  const currentDate = moment().locale("cz");
  console.log(currentDate.toISOString());
  const start = currentDate.clone().subtract(5, "month").startOf("month");
  const end = currentDate.clone().add(5, "year").startOf("month");

  const { data: events, loading, error, refetch } = useFetchEvents(start, end);
  console.log(events);
  const transformedEvents = events ? Object.entries(events) : null;
  console.log(transformedEvents);
  return (
    <CalendarContext.Provider value={events}>
      <BrowserRouter>
        <Header openModal={false}>
          <Route
            path="/"
            render={() =>
              events ? <ListView data={Object.entries(events)} /> : null
            }
          />
        </Header>
      </BrowserRouter>
    </CalendarContext.Provider>
  );
};

export default App;
