import React, { useEffect, useState } from "react";
import ListView from "./Modules/List/ListView";
import Header from "./Modules/Header/Header";
import AddEditForm from "./Modals/AddEditForm/AddEditForm";
import moment, { Moment } from "moment";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import {
  CalendarContext,
  initialAddEditValues,
  EventModel,
  MessageModel,
  branchTypes,
  PageStateModel,
  ConfirmModalModel,
  ApptDetailsModel,
} from "./App.definitions";
import { getEvents } from "./App.utils";
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
import CalendarView from "./Modules/Calendar/Calendar";
import ConfirmModal from "./myComponents/ConfirmModal/ConfirmModal";
import ApptDetails from "./Modals/ApptDetails/ApptDetails";

interface CalendarViewProps {
  reference: any;
  viewStart: Moment | any;
  viewEnd: Moment | any;
}

const test = {
  attendees: [],
  branch: "BRNO",
  created: "2020-11-08T17:28:16.172",
  creator: "Kamil",
  end: "2020-10-30T19:00:00",
  eventType: { id: 1, name: "Obecny", color: "rgb(207, 4, 41)" },
  id: 4,
  image: null,
  location: "Brno",
  notes: "",
  start: "2020-10-30T18:00:00",
  title: "Testova udalost",
  updated: "2020-11-08T17:28:16.172",
};
const App: React.FC = () => {
  console.log("%c APP is RENDERED", "background: #222; color: #da2442");
  const [currentDate, handleCurrentDate] = useState(moment().locale("cz"));
  const [addModal, handleAddEditModal] = useState({
    isOpen: false,
    isEditing: false,
  });
  const [apptDetails, handleApptDetails] = useState<ApptDetailsModel>({
    visible: false,
    event: null,
  });
  const [pageState, handlePageState] = useState<PageStateModel>({
    branch: branchTypes[0],
    activeView: "/list",
  });
  const [calendarRef, setCalendarRef] = useState<CalendarViewProps>();
  const [addEditValues, setInitialAddEditValues] = useState<EventModel>({
    ...initialAddEditValues,
    branch: pageState.branch.value,
  });
  const [messageState, handleMessageState] = useState<Partial<MessageModel>>({
    visible: false,
  });
  const [confirmModal, handleConfirmModal] = useState<
    Partial<ConfirmModalModel>
  >({});

  //CREATE MUTATION
  const [
    createEvent,
    { status: createEventStatus, error: createEventError },
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

  //EVENT TYPES QUERY
  const { data: eventTypes } = useQuery("eventTypes", fetchEventTypes);
  console.log(eventTypes);
  //UPDATE MUTATION
  const [updateEvent] = useMutation(updateEventMutation, {
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

  //DELETE MUTATION
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

  //FETCH EVENTS QUERY
  const { isLoading, data: events, refetch } = useQuery("events", () => {
    console.log("FETCH IS CALLED");
    if (pageState.activeView === "/list") {
      return getEvents(
        currentDate.clone().subtract(10, "month").startOf("month"),
        currentDate.clone().add(5, "year").startOf("month"),
        pageState.branch.value
      );
    } else {
      return getEvents(
        calendarRef?.viewStart,
        calendarRef?.viewEnd,
        pageState.branch.value
      );
    }
  });

  useEffect(() => {
    console.log(calendarRef);
    console.log("useEffect App");
    handleCurrentDate(moment().locale("cz"));
    setInitialAddEditValues({
      ...addEditValues,
      branch: pageState.branch.value,
      start: currentDate.clone().add(1, "hour").startOf("hour").format(),
      end: currentDate.clone().add(2, "hour").startOf("hour").format(),
    });
    refetch();
  }, [pageState, calendarRef]);

  const handleCancel = () => {
    setInitialAddEditValues({
      ...initialAddEditValues,
      branch: pageState.branch.value,
    });
    handleAddEditModal({ isOpen: false, isEditing: false });
  };

  const openAddEditModal = (isEditing: boolean, event?: EventModel) => {
    if (isEditing) setInitialAddEditValues(event!);
    handleAddEditModal({ isOpen: true, isEditing: isEditing });
  };

  const renderMessage = () => {
    return <Message messageState={messageState} />;
  };
  console.log(events);
  return (
    <CalendarContext.Provider
      value={{
        events,
        deleteEvent,
        updateEvent,
        handleAddEditModal,
        addEditValues,
        setInitialAddEditValues,
        openAddEditModal,
        eventTypes,
        pageState,
        handlePageState,
        handleConfirmModal,
        setCalendarRef,
        currentDate,
        handleApptDetails,
      }}
    >
      <BrowserRouter>
        <Header>
          <Route exact path="/" render={() => <Redirect to={"/list"} />} />
          <Route
            path="/list"
            exact
            render={() =>
              deleteEventStatus === "loading" ||
              createEventStatus === "loading" ||
              isLoading ? (
                <Dimmer
                  active
                  inverted
                  blurring={1}
                  style={{ height: "1000px" }}
                >
                  <Loader />
                </Dimmer>
              ) : (
                <ListView data={Object.entries(events)} />
              )
            }
          />
          <Route path="/calendar">
            <CalendarView />
          </Route>
        </Header>
        {addModal.isOpen && (
          <AddEditForm
            cancel={handleCancel}
            submit={createEvent}
            initialState={addEditValues}
            isEditing={addModal.isEditing}
          />
        )}
        {renderMessage()}
        {confirmModal && <ConfirmModal state={confirmModal} />}
        {apptDetails.visible && <ApptDetails event={apptDetails.event} />}
      </BrowserRouter>
    </CalendarContext.Provider>
  );
};

export default App;
