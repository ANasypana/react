import React from 'react';
import cn from 'classnames';
import { getDayOfWeek } from '../../../common/utils/dateTransform'

export const ForecastItem = ({day: {type, day, temperature, id }, getCurrentDay, cdId}) => {
  const styles = cn({
    day: true,
    cloudy: type === 'cloudy',
    rainy: type === 'rainy',
    sunny: type === 'sunny',
    selected: id === cdId
  });

  return(
    <div
      className={styles}
      onClick={() => {getCurrentDay(id)}}
    >
      <p>{getDayOfWeek(day)}</p>
      <span>{temperature}</span>
    </div>
  )
}