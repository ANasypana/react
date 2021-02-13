import React from 'react';
import { useInitLifeScore } from '../../../bus/tracking/hooks/useInitLifeScore';
import Styles from './styles/index.module.scss';
import cx from 'classnames';

export const LifeScore = () => {
  const { score } = useInitLifeScore();

  return(
    <div className={Styles.widget}>
      <span className={Styles.title}>Life Score</span>
      <div className={Styles.module}>
        <span className={Styles.score} style={{bottom: `${score}%`}}>{score}</span>
        <div className={Styles.progress}>
          <div className={Styles.fill} style={{height: `${score}%`}}></div>
        </div>
        <span className={cx([Styles.label, Styles.level1])}>Off Track</span>
        <span className={cx([Styles.label, Styles.level2])}>Imbalanced</span>
        <span className={cx([Styles.label, Styles.level3])}>Balanced</span>
        <span className={cx([Styles.label, Styles.level4])}>Healthy</span>
        <span className={cx([Styles.label, Styles.level5])}>Perfect Fit</span>
      </div>
    </div>
  )
}