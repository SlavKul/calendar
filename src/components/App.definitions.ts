import React, {createContext, useContext} from 'react'

export const CalendarContext = React.createContext<CalendarContextType | null>(null);
export const useCalendarContext = () => useContext(CalendarContext)

export interface CalendarContextType {
    events: object
}

export interface EventModel {
    id: number
    title: string
    location?: string
    notes?: string
    creator?: string
    created?: string
    updated?: string
    startTime?: string
    endTime?: string
    eventType?: object
    attendees?: string[]
}