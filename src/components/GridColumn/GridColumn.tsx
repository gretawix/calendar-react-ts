import { memo } from 'react';
import EventTile from '../Tile/EventTile';
import './gridColumn.scss';
import { useEvents } from '../../hooks/useEvents';

type GridColumnProps = {
  columnId: string;
  newEvent: boolean;
};

const GridColumn: React.FC<GridColumnProps> = ({ columnId, newEvent }) => {
  const { newEventTileRef, newEventData, initNewEvent } = useEvents();

  return (
    <div className="hours-cells-column" onClick={initNewEvent} id={columnId}>
      {newEvent && newEventData && (
        <EventTile
          ref={newEventTileRef}
          existingEvent={false}
          title={newEventData.title}
          startTime={newEventData.startTimeInMinutes}
          eventLength={newEventData.eventLengthInMinutes}
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
