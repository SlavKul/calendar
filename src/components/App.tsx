import React, { useEffect, useState } from "react";
import ListView from "./Modules/List/ListView";
import Header from "./Modules/Header/Header";
import AddEditForm from "./Modals/AddEditForm/AddEditForm";
import moment from "moment";
import { BrowserRouter, Route } from "react-router-dom";
import Calendar from "./Modules/Calendar/Calendar";
import {
  CalendarContext,
  initialAddEditValues,
  EventModel,
  MessageModel,
} from "./App.definitions";
import { useFetchEvents } from "./App.utils";
import { useMutation, useQuery } from "react-query";
import {
  createEventMutation,
  deleteEventMutation,
  updateEventMutation,
  fetchEventTypes,
} from "./Queries";
import { Dimmer, Loader } from "semantic-ui-react";
import Message from "./myComponents/Message/Message";
import dictionary from "../utilities/dictionary";

/*render() {
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
  const [addModal, handleAddEditModal] = useState(false);
  const [isEditing, handleEditing] = useState(false);
  const [addEditValues, setInitialAddEditValues] = useState<EventModel>(
    initialAddEditValues
  );
  const [messageState, handleMessageState] = useState<Partial<MessageModel>>({
    visible: false,
  });

  const [
    createEvent,
    {
      status: createEventStatus,
      data: createEventData,
      error: createEventError,
    },
  ] = useMutation(createEventMutation, {
    onSuccess: () => {
      refetch();
      handleMessageState({
        status: "success",
        message: dictionary.eventActions.createSuccess,
        visible: true,
      });
    },
    onError: () => {
      handleMessageState({
        status: "success",
        message: `Chyba ${createEventError}`,
        visible: true,
      });
    },
  });
  const { data: eventTypes } = useQuery("eventTypes", fetchEventTypes);
  console.log("TYPES", eventTypes);
  const [
    updateEvent,
    {
      status: updateEventStatus,
      data: updateEventData,
      error: updateEventError,
    },
  ] = useMutation(updateEventMutation, {
    onSuccess: () => {
      refetch();
      handleMessageState({
        status: "success",
        message: dictionary.eventActions.updateSuccess,
        visible: true,
      });
    },
    onError: () => {
      handleMessageState({
        status: "success",
        message: `Chyba`,
        visible: true,
      });
    },
  });

  const [deleteEvent, { status: deleteEventStatus }] = useMutation(
    deleteEventMutation,
    {
      onSuccess: () => {
        refetch();
        handleMessageState({
          status: "success",
          message: dictionary.eventActions.deleteSuccess,
          visible: true,
        });
      },
    }
  );

  const { isLoading, isError, data: events, error, refetch } = useFetchEvents(
    currentDate.clone().subtract(10, "month").startOf("month"),
    currentDate.clone().add(5, "year").startOf("month")
  );

  const handleCancel = () => {
    setInitialAddEditValues(initialAddEditValues);
    handleAddEditModal(false);
  };

  const openAddEditModal = () => {
    return (
      <AddEditForm
        isVisible={addModal}
        cancel={handleCancel}
        submit={createEvent}
        initialState={addEditValues}
        refetch={refetch}
        isEditing={isEditing}
      />
    );
  };

  const renderMessage = () => {
    return <Message messageState={messageState} />;
  };

  return (
    <CalendarContext.Provider
      value={{
        events,
        deleteEvent,
        updateEvent,
        handleAddEditModal,
        setInitialAddEditValues,
        handleEditing,
        eventTypes,
      }}
    >
      <BrowserRouter>
        <Header>
          <Route
            path="/"
            exact
            render={() =>
              deleteEventStatus === "loading" ||
              createEventStatus === "loading" ||
              isLoading ? (
                <Dimmer active inverted blurring style={{ height: "1000px" }}>
                  <Loader />
                </Dimmer>
              ) : (
                <ListView data={Object.entries(events)} />
              )
            }
          />
          <Route path="/calendar" exact render={() => <Calendar />} />
        </Header>
        {addModal ? openAddEditModal() : null}
        {renderMessage()}
      </BrowserRouter>
    </CalendarContext.Provider>
  );
};

export default App;
