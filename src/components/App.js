import React from "react";
import ListView from "./List/ListView";
import Header from "./Header/Header";
import AddEditForm from "./Modals/AddEditForm/AddEditForm";
import moment from "moment";
import { BrowserRouter, Route } from "react-router-dom";
import Calendar from './Calendar/Calendar'

class App extends React.Component {
  state = {
    //customDate: moment(),
    currentDate: moment().locale("cz"),
    isAddModalOpen: false,
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

  /*navigateToNextYear = () => {
    const newDate = this.state.customDate.clone().add(1, "year");
    this.setState({
      customDate: newDate,
    });
  };*/

  /*navigateToPreviousYear = () => {
    const newDate = this.state.customDate.clone().subtract(1, "year");
    console.log(
      this.state.customDate.format("YYYY"),
      "CLicking preveios year",
      newDate.format("YYYY")
    );
    this.setState({
      customDate: newDate,
    });
  };*/


  clickHandle = (e) =>{
    console.log(e)
    this.setState({
      isAddModalOpen: true
    })
  }


  render() {
    const date = moment().locale("cz");

    console.log(date.format("ddd"));
    console.log("RENDER APP");
    return (
      <BrowserRouter>
        <Header
          date={this.state.currentDate}
          openModal={this.openAddModalHandler}
        >
          <Route
            path="/list"
            render={() => <ListView date={this.state.currentDate} />}
          />
          <Route
            path="/calendar"
            render={() => <Calendar clickEvent={this.clickHandle}/>}
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
          />
        ) : null}
      </BrowserRouter>
    );
  }
}

export default App;
