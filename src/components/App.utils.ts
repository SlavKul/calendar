import useAxios from 'axios-hooks'
import moment, { Moment } from 'moment'
export const getAddEditFormDefaultValues = (date: object): string => {
    return 'hello'
}

export const fetchEvents = (start: Moment, end: Moment): object =>{
    const startDate = start.format("YYYY-MM-DDThh:mm")
    const endDate = end.format("YYYY-MM-DDThh:mm")
    const [{data: data, loading: getLoading, error: getError}] = useAxios(`/events/map?end=${endDate}&start=${startDate}`)
    return {data}
}