import useAxios from 'axios-hooks'
import { Moment } from 'moment'
import React, {useState} from 'react'

export const getAddEditFormDefaultValues = (date: object): string => {
    return 'hello'
}

export const useFetchEvents = (start: Moment, end: Moment) =>{
    const startDate = start.format("YYYY-MM-DDThh:mm")
    const endDate = end.format("YYYY-MM-DDThh:mm")
    const [{data, loading, error}, refetch] = useAxios(`/events/map?end=${endDate}&start=${startDate}`)

    return {data, loading, error, refetch}
}