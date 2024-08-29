import WeekDay from '../WeekDay/WeekDay';
import { forwardRef, memo } from 'react';

import type { OneWeekDay } from '../../types/main';

import './weekDayRow.scss';

type WeekDaysRowProps = {
  today: OneWeekDay;
  timeZone: string;
  week: OneWeekDay[];
  onScroll: () => void;
};

const WeekDaysRow = forwardRef<HTMLDivElement, WeekDaysRowProps>(
  function WeekDaysRow({ today, timeZone, week, onScroll }, ref) {
    return (
      <div className="week-days-part">
        <div className="time-zone-cell">
          <p className="time-zone">{timeZone}</p>
        </div>
        <div className="week-days" id="days-row" ref={ref} onScroll={onScroll}>
          <div className="divider-no-border"></div>
          {week.map((oneDay) => (
            <WeekDay
              key={oneDay.id}
              day={oneDay}
              isToday={oneDay.id === today.id}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default memo(WeekDaysRow);
