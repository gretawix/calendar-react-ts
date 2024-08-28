import { forwardRef, memo, useRef } from 'react';
import GridColumn from '../GridColumn';
import { useScroll } from '../../hooks/useScroll';

import type { ScrollRef, WeekDayType } from '../../types/types';
import './styles.scss';

type TimeGridProps = {
  week: WeekDayType[];
  hours: string[];
  onScroll: () => void;
};

const TimeGrid = forwardRef<HTMLDivElement, TimeGridProps>(function TimeGrid(
  { week, hours, onScroll },
  ref
) {
  const hourColRef = useRef<HTMLDivElement>(null);

  const { handleVerticalScroll } = useScroll();
  const handleGridScroll = () => {
    handleVerticalScroll(ref as ScrollRef, hourColRef);
    onScroll();
  };

  return (
    <div className="time-grid">
      <div
        className="hours-labels-column"
        id="hours-col"
        ref={hourColRef}
        onScroll={() => handleVerticalScroll(hourColRef, ref as ScrollRef)}
      >
        {hours.map((hour) => (
          <div key={hour} className="hour-label-cell cell-height">
            <p className="hour">{hour}</p>
          </div>
        ))}
      </div>
      <div
        className="hours-cells-all"
        id="days-hours-grid"
        ref={ref}
        onScroll={handleGridScroll}
      >
        <div className="divider-column">
          {hours.map((hour) => (
            <div key={hour} className="divider cell-height"></div>
          ))}
        </div>
        {week.map((oneDay) => (
          <GridColumn key={oneDay.id} day={oneDay} />
        ))}
      </div>
    </div>
  );
});

export default memo(TimeGrid);
