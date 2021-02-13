import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { forecastActions } from "../actions";

export const useForecastFetch = () => {
  const dispatch = useDispatch();
  const { days, currentDay, isFetching, error } = useSelector(state => state.forecast);

  const getForecast = useCallback(() => {
    dispatch(forecastActions.fetchForecast())
  }, []);

  const getCurrentDay = useCallback(id => {
    dispatch(forecastActions.dayFill(id))
  }, [])

  return { days, currentDay, isFetching, error, getForecast, getCurrentDay }
}