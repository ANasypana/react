import React from 'react';
import { LifeScore } from '../../../common/layout/lifeScore';
import { useInitActivity } from '../hooks/useInitActivity';
import { useRecordActivity } from '../hooks/useRecordActivity';
import { MyNumberInput } from '../../../common/dashboardElements/myNumberInput';
import { Spinner } from '../../../common/layout/spinner';

import Styles from './styles/index.module.scss';


export const SleepComponent = () => {
  const { isFetching, error } = useInitActivity('sleep');
  const { onSubmit, value, setValue } = useRecordActivity('sleep');

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
          <h1>Сколько часов ты сегодня спал?</h1>
          <MyNumberInput
            value={value}
            setValue={setValue}
            placeholder='Введите свое число'
            max={24}
          />
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