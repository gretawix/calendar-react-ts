import { memo } from 'react';
import type { WeekDay } from '../../types/main';
import './styles.scss';

type GridColumnProps = {
  day: WeekDay;
};

const GridColumn: React.FC<GridColumnProps> = ({ day }) => {
  return (
    <div
      className="hours-cells-column"
      data-weekday={day.weekDay}
      data-month={day.month}
      data-day={day.day}
      data-year={day.year}
    ></div>
  );
};

export default memo(GridColumn);
