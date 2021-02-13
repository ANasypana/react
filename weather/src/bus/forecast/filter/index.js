import React from 'react';
import cn from 'classnames';
import { useFilterForecast } from "../hooks/useFilterForecast";
import { MyInput } from "../../../common/form/myIntut";


export const Filter = () => {
  const {filtered: {type, isFiltered, temperatureMax, temperatureMin},
    setTemperature, changeTemperature, getType, doFiltered, inputMax, inputMin } = useFilterForecast();

  const isStarted = type || temperatureMin !== null || temperatureMax !== null;

  const stylesCloudy = cn({
    checkbox: true,
    selected: type === 'cloudy',
  });

  const stylesSunny = cn({
    checkbox: true,
    selected: type === 'sunny',
  });

  const nameButton = !isFiltered ? 'Filter' : 'Reset';

  return(
    <div className="filter">
      <span
        disabled={isFiltered}
        onClick={getType}
        className={stylesCloudy}
        data-type='cloudy'>
        Хмарно
      </span>
      <span
        onClick={getType}
        className={stylesSunny}
        data-type='sunny'>
        Сонячно
      </span>
      <p className="custom-input">

        <MyInput
          label='Мінімальна температура'
          onBlur={setTemperature}
          onChange={changeTemperature}
          name="temperatureMin"
          link={inputMin}
          type='text'
        />
      </p>
      <p className="custom-input">
        <MyInput
          label='Максимальна температура'
          onBlur={setTemperature}
          onChange={changeTemperature}
          name="temperatureMax"
          link={inputMax}
          type="text"
        />
      </p>
      <button
        onClick={()=> {doFiltered()}}
        disabled={!isStarted}
      >
        {nameButton}
      </button>
    </div>
  )
}