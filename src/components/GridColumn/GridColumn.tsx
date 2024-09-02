import { memo } from 'react';
import EventTile from '../Tile/EventTile';

import type { initNewEventFn } from '../../contexts/contextTypes';
import './gridColumn.scss';
import { useEvents } from '../../hooks/useEvents';

type GridColumnProps = {
  onClick: initNewEventFn;
  columnId: string;
  newEvent: boolean;
};

const GridColumn: React.FC<GridColumnProps> = ({
  columnId,
  newEvent,
  onClick,
}) => {
  const { newEventTileRef, newEventData } = useEvents();

  return (
    <div
      className="hours-cells-column"
      onClick={(event) => onClick(event, columnId)}
      id={columnId}
    >
      {newEvent && newEventData && (
        <EventTile
          ref={newEventTileRef}
          existingEvent={false}
          title={newEventData?.title}
          startTime={180}
          eventLength={240}
        />
      )}
    </div>
  );
};

const areEqual = (prevProps: GridColumnProps, nextProps: GridColumnProps) => {
  return (
    prevProps.newEvent === nextProps.newEvent &&
    prevProps.columnId === nextProps.columnId
  );
};

export default memo(GridColumn, areEqual);
