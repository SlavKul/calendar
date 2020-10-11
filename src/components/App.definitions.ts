import React, {createContext, useContext} from 'react'

export const CalendarContext = createContext<null | CalendarContextType>(null);
export const useCalendarContext = () => useContext(CalendarContext)

export interface CalendarContextType {
    events?: {
        date: string
        events: object
    }
    openAddEditForm: () => void

}