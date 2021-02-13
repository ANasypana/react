import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { forecastActions } from "../actions";
import { strIntoNumber } from '../../../common/utils/strIntoNumber';

export const useFilterForecast = () => {
  const inputMax = useRef(null);
  const inputMin = useRef(null);

  const defaultData = {
    isFiltered: false,
    type: null,
    temperatureMax: null,
    temperatureMin: null
  };

  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState(defaultData);

  const getType = event => {
    if(!filtered.isFiltered){
      const type = event.currentTarget.getAttribute('data-type');
      if(type === filtered.type){
        setFiltered({...filtered, type: null})
      }else {
        setFiltered({...filtered, type })
      }
    }
  }

  const changeTemperature = event => {
    const data = strIntoNumber(event.currentTarget.value);
    event.currentTarget.value = data;
  }

  const setTemperature = event => {
    let data = event.currentTarget.value;
    data = data.split(',').join('');

    if(filtered.temperatureMax &&
      event.currentTarget.name !== 'temperatureMax' &&
      data !== '' &&
      !isNaN(Number(data))
    ){
      data = Number(data) > filtered.temperatureMax ? filtered.temperatureMax : data;
    }

    if(filtered.temperatureMin &&
      event.currentTarget.name !== 'temperatureMin' &&
      data !== '' &&
      !isNaN(Number(data))
    ){
      data = Number(data) < filtered.temperatureMin ? filtered.temperatureMin : data;
    }

    const textNumber = strIntoNumber(data.toString())

    event.currentTarget.value = textNumber.slice(-1) === '.' ? textNumber.slice(0, -1) : textNumber;

    const number = data === '' || isNaN(Number(data)) ? null : Number(data);

    setFiltered({...filtered, [event.currentTarget.name]: number})
  }

  const doFiltered = () => {
    if (filtered.isFiltered) {
      dispatch(forecastActions.clearFilter());
      /*dispatch(forecastActions.fetchForecast())*/
      setFiltered(defaultData);
      inputMin.current.value = ''
      inputMax.current.value = '';
    } else {
      dispatch(forecastActions.setFilter(filtered))
      setFiltered({...filtered, isFiltered: true})
    }
  }

  return { filtered, setTemperature, changeTemperature, getType, doFiltered, inputMax, inputMin }
}