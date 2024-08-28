import { memo } from 'react';
import type { OneWeekDay } from '../../types/main';
import './styles.scss';

type WeekDayProps = {
  day: OneWeekDay;
  isToday: boolean;
};

const WeekDay: React.FC<WeekDayProps> = ({ day, isToday }) => {
  return (
    <div
      className={`one-day cell-width ${isToday && 'active'}`}
      data-weekday={day.weekDay}
      data-month={day.month}
      data-day={day.day}
      data-year={day.year}
    >
      <div className="divider-vertical"></div>
      <p className="day-name">{day.weekDay}</p>
      <p className="day-number">{day.day}</p>
    </div>
  );
};
export default memo(WeekDay);
