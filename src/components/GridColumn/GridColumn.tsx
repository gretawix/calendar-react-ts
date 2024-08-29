import { memo } from 'react';

import type { OneWeekDay } from '../../types/main';

import './gridColumn.scss';

type GridColumnProps = {
  day: OneWeekDay;
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
