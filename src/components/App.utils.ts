import { Moment } from "moment";
import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

export const getAddEditFormDefaultValues = (date: object): string => {
  return "hello";
};

const getEvents = async (start: Moment, end: Moment) => {
  const startDate = start.format("YYYY-MM-DDThh:mm");
  const endDate = end.format("YYYY-MM-DDThh:mm");
  const { data } = await axios.get(
    `/events/map?end=${endDate}&start=${startDate}`
  );
  return data;
};

export const useFetchEvents = (start: Moment, end: Moment) => {
  const { isLoading, isError, data, error, refetch } = useQuery("events", () =>
    getEvents(start, end)
  );

  return { isLoading, isError, data, error, refetch };
};
