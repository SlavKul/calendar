import moment from "moment";
import { createContext, useContext } from "react";
const currentDate = moment().locale("cz");
export const CalendarContext = createContext<Partial<CalendarContextType>>({});
export const useCalendarContext = () => useContext(CalendarContext);

export type CalendarContextType = {
  events: object;
  deleteEvent: (id: number | undefined) => void;
  updateEvent: (payLoad: EventModel) => void;
  handleAddEditModal: (value: boolean) => void;
  setInitialAddEditValues: (value: EventModel) => void;
  initialAddEditValues: EventModel;
  handleEditing: (value: boolean) => void;
  eventTypes: EventTypeModel[];
};

export interface EventModel {
  id?: number;
  title: string;
  location?: string;
  notes?: string;
  creator?: string;
  created?: string;
  updated?: string;
  startTime?: string;
  endTime?: string;
  eventType?: EventTypeModel;
  attendees?: string[];
  branch?: string;
}

export const initialAddEditValues = {
  id: 0,
  title: "",
  location: "",
  notes: "",
  creator: "",
  created: "",
  updated: "",
  eventType: { id: 1, name: "General", color: "rgb(3, 173, 252)" },
  branch: "Brno",
  attendees: [],
  startTime: currentDate.clone().add(1, "hour").startOf("hour").format(),
  endTime: currentDate.clone().add(2, "hour").startOf("hour").format(),
};

export interface MessageModel {
  status?: string | undefined;
  message?: string | undefined;
  visible?: boolean | undefined;
}

export interface EventTypeModel {
  id: number;
  name: string;
  color: string;
}

export const branchTypes = [
  {
    key: "Brno",
    text: "Brno",
    value: "Brno",
  },
  {
    key: "Ostrava",
    text: "Ostrava",
    value: "Ostrava",
  },
  {
    key: "Olomouc",
    text: "Olomouc",
    value: "Olomouc",
  },
  {
    key: "Celofiremní",
    text: "Celofiremní",
    value: "Celofiremní",
  },
];
