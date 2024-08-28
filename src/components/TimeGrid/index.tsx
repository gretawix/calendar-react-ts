import GridColumn from '../GridColumn';
import type { WeekDayType } from '../../types/types';
import './styles.scss';
import { memo, useRef } from 'react';

type TimeGridProps = {
  week: WeekDayType[];
  hours: string[];
};

const TimeGrid: React.FC<TimeGridProps> = ({ week, hours }) => {
  const hourColRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleScroll = (
    sourceDiv: React.RefObject<HTMLDivElement>,
    targetDiv: React.RefObject<HTMLDivElement>
  ) => {
    if (sourceDiv.current && targetDiv.current) {
      targetDiv.current.scrollTop = sourceDiv?.current?.scrollTop;
    }
  };

  return (
    <div className="time-grid">
      <div
        className="hours-labels-column"
        id="hours-col"
        ref={hourColRef}
        onScroll={() => handleScroll(hourColRef, gridRef)}
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
        ref={gridRef}
        onScroll={() => handleScroll(gridRef, hourColRef)}
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
};

export default memo(TimeGrid);
