import React from 'react';
import { LifeScore } from '../../../common/layout/lifeScore';
import { useInitActivity } from '../hooks/useInitActivity';
import { useRecordActivity } from '../hooks/useRecordActivity';
import { MyButtons } from '../../../common/dashboardElements/myButtons';
import { Spinner } from '../../../common/layout/spinner';

import Styles from './styles/index.module.scss';



export const WaterComponent = () => {
  const { isFetching, error } = useInitActivity('water');
  const { onSubmit, value, setValue } = useRecordActivity('water');

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
          <h1>Сколько воды ты сегодня выпил?</h1>
          <div className={Styles.question}>
            <MyButtons setValue={setValue} value={value}/>
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