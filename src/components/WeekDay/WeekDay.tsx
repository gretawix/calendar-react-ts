import { memo } from 'react';

import type { OneWeekDay } from '../../types';

import './weekDay.scss';
import classNames from 'classnames';

type WeekDayProps = {
  day: OneWeekDay;
  isToday: boolean;
};

const WeekDay: React.FC<WeekDayProps> = ({ day, isToday }) => {
  const oneDayClass = classNames('one-day', 'cell-width', { active: isToday });

  return (
    <div className={oneDayClass}>
      <div className="divider-vertical"></div>
      <p className="day-name">{day.weekDay}</p>
      <p className="day-number">{day.day}</p>
    </div>
  );
};
export default memo(WeekDay);
