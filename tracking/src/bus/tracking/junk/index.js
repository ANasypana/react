import React from 'react';
import { LifeScore } from '../../../common/layout/lifeScore';
import { useInitActivity } from '../hooks/useInitActivity';
import { useRecordActivity } from '../hooks/useRecordActivity';
import { MyRadioButton } from '../../../common/dashboardElements/myRadioButton';
import { Spinner } from '../../../common/layout/spinner';

import Styles from './styles/index.module.scss';


export const JunkComponent = () => {
  const { isFetching, error } = useInitActivity('junk');
  const { onSubmit, value, setValue } = useRecordActivity('junk');

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
          <h1>Ты сегодня кушал Фастфуд?</h1>
          <div className={Styles.answers}>
            <MyRadioButton
              label='Да'
              value={value}
              targetValue={true}
              setValue={setValue}
            />
            <MyRadioButton
              value={value}
              label='Нет'
              targetValue={false}
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
