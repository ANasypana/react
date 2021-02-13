import React from 'react';
import cn from 'classnames';
import {getDayOfWeek,getDate} from '../../../common/utils/dateTransform'

export const Head = ({day, type}) => {
  const styles = cn({
    icon: true,
    cloudy: type === 'cloudy',
    rainy: type === 'rainy',
    sunny: type === 'sunny'
  });

  return(
    <div className="head">
      <div className={styles}></div>
      <div className="current-date">
        <p>{getDayOfWeek(day).toUpperCase()}</p>
        <span>{getDate(day).toUpperCase()}</span>
      </div>
    </div>
  )
}