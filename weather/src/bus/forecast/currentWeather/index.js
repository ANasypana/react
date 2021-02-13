import React from 'react';

export const CurrentWeather = ({day}) => {

  return(
    <div className="current-weather">
      {day &&
      <>
        <p className="temperature">{day.temperature}</p>
        <p className="meta">
          <span className="rainy">%{day.ain_probability}</span>
          <span className="humidity">%{day.humidity}</span>
        </p>
      </>}
    </div>
  )
}