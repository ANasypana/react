import React from 'react';
import DatePicker from 'react-datepicker';
import { ceilDate } from '../../../../../../common/utils/ceilDate';

export const MyDatePickerElement = ({ setFieldValue, name, value, setIsDateTouched }) => {
  return(
    <span className='date'>
        <DatePicker
          dateFormat='MMMM dd, yyyy'
          selected={new Date(value)}
          onSelect={date => {setFieldValue(name, ceilDate(date)); setIsDateTouched(true)}}
          minDate={new Date()}
          onChange={date => {setFieldValue(name, ceilDate(date)); setIsDateTouched(true)}}
       />
    </span>
  )
}