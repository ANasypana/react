import React, { useEffect } from 'react';
import { useForecastFetch } from "./hooks/useForecastFetch";
import {Spinner} from "../../common/layout/spinner/Spinner";
import {Head} from "./head";
import { CurrentWeather } from "./currentWeather";
import { ForecastItem } from "./forecastItem";
import {Filter} from "./filter";

export const Forecast = () => {
  const { days, currentDay, isFetching, error, getForecast, getCurrentDay } = useForecastFetch();
  console.log("Restart")

  useEffect(()=> {
    getForecast();
  }, [getForecast]);

  if(error){
    return (
      <main>
        <div className='error'>
          <h3>{error.message}</h3>
        </div>
      </main>
    )
  };

  const forecastData = days.length  ?
    days.map(day => <ForecastItem
      key={day.id} day={day}
      cdId={currentDay && currentDay.id}
      getCurrentDay={getCurrentDay}/>) :
    <p className='message'>За заданими критеріями немає доступних днів!</p>;

  return(
    <main>
      {isFetching ? <Spinner/> :
        <>
          <Filter/>
          <Head day={currentDay && currentDay.day} type={currentDay && currentDay.type}/>
          <CurrentWeather day={currentDay} />
          <div className='forecast'>{forecastData}</div>
        </>
      }
    </main>
  )
}