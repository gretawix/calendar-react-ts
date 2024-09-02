import { forwardRef, memo, useCallback, useRef } from 'react';
import GridColumn from '../GridColumn/GridColumn';
import { useScroll } from '../../hooks/useScroll';
import { useDate } from '../../hooks/useDate';
import { useEvents } from '../../hooks/useEvents';
import { useModal } from '../../hooks/useModal';

import type { ScrollRef } from '../../types/main';

import './timeGrid.scss';

type TimeGridProps = {
  onHorizontalScroll: () => void;
};

const TimeGrid = forwardRef<HTMLDivElement, TimeGridProps>(function TimeGrid(
  { onHorizontalScroll },
  ref
) {
  const { week, hoursList } = useDate();
  const { activeTileColId, setActiveTileColId } = useEvents();
  const { openModal } = useModal();

  const hourColRef = useRef<HTMLDivElement>(null);

  const handleColumnClick = useCallback((columnId: string) => {
    openModal();
    setActiveTileColId(columnId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { handleVerticalScroll } = useScroll();
  const handleGridScroll = useCallback(() => {
    handleVerticalScroll(ref as ScrollRef, hourColRef);
    onHorizontalScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="time-grid">
      <div
        className="hours-labels-column"
        id="hours-col"
        ref={hourColRef}
        onScroll={() => handleVerticalScroll(hourColRef, ref as ScrollRef)}
      >
        {hoursList.map((hour) => (
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
          {hoursList.map((hour) => (
            <div key={hour} className="divider cell-height"></div>
          ))}
        </div>
        {week.map((oneDay) => (
          <GridColumn
            key={oneDay.id}
            columnId={oneDay.id}
            onClick={() => handleColumnClick(oneDay.id)}
            tileIsOpen={oneDay.id === activeTileColId}
          />
        ))}
      </div>
    </div>
  );
});

export default memo(TimeGrid);
