import type { WeekDayType } from '../../types/types';
import './styles.scss';

type GridColumnProps = {
  day: WeekDayType;
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

export default GridColumn;
