import WeekDay from '../WeekDay/WeekDay';
import { forwardRef, memo } from 'react';

import './weekDayRow.scss';
import { useDate } from '../../hooks/useDate';

type WeekDaysRowProps = {
  onScroll: () => void;
};

const WeekDaysRow = forwardRef<HTMLDivElement, WeekDaysRowProps>(
  function WeekDaysRow({ onScroll }, ref) {
    const { today, timeZone, week } = useDate();

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
