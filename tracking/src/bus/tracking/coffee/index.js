import React from 'react';
import { LifeScore } from '../../../common/layout/lifeScore';
import { useInitActivity } from '../hooks/useInitActivity';
import {useRecordActivity} from "../hooks/useRecordActivity";
import { MyRadioButton } from '../../../common/dashboardElements/myRadioButton';
import { Spinner } from '../../../common/layout/spinner';

import Styles from './styles/index.module.scss';



export const CoffeeComponent = () => {
  const {  isFetching, error } = useInitActivity('coffee');
  const { onSubmit, value, setValue } = useRecordActivity('coffee');

  if(error){
    return (
      <div className={Styles.content}>
        <div className={Styles.question}>
          <div className={Styles.error}>
            {error.message}
          </div>
        </div>
        <LifeScore />
      </div>
    )
  }

  return(
    <div className={Styles.content}>
      {isFetching ? <Spinner/> :
        <div className={Styles.question}>
          <h1>Ты сегодня пил кофе?</h1>
          <div className={Styles.answers}>
            <MyRadioButton
              label='Я не пил совсем'
              value={value}
              targetValue='none'
              setValue={setValue}
            />
            <MyRadioButton
              value={value}
              label='Выпил 1 стакан'
              targetValue='light'
              setValue={setValue}
            />
            <MyRadioButton
              value={value}
              label='Выпил 2 или больше стаканов'
              targetValue='heavy'
              setValue={setValue}
            />
          </div>
          <button
            disabled={value === ''}
            onClick={onSubmit}
            className={Styles.sendAnswer}
          >
            Ответить
          </button>
        </div>
      }
      <LifeScore />
    </div>
  )
}
