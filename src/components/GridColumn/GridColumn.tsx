import { memo } from 'react';
import EventTile from '../EventTile';
import './gridColumn.scss';
import { useNewEvent } from '../../hooks/useNewEvent';
import { useAllEvents } from '../../hooks/useAllEvents';

type GridColumnProps = {
  columnId: string;
  isNewEvent: boolean;
};

const GridColumn: React.FC<GridColumnProps> = ({ columnId, isNewEvent }) => {
  const { newEventData, initNewEvent } = useNewEvent();
  const { allEvents } = useAllEvents();

  return (
    <div className="hours-cells-column" onClick={initNewEvent} id={columnId}>
      {isNewEvent && (
        <EventTile
          title={newEventData.title}
          startTime={newEventData.startTimeInMinutes}
          eventLength={newEventData.eventLengthInMinutes}
        />
      )}
      {allEvents.map((event) => {
        const dayId = `${event.weekDay}-${event.month}-${event.day}-${event.year}`;
        return (
          dayId === columnId && (
            <EventTile
              key={event.id}
              existingEvent={true}
              title={event.title}
              startTime={event.startTimeInMinutes}
              eventLength={event.eventLengthInMinutes}
            />
          )
        );
      })}
    </div>
  );
};

const areEqual = (prevProps: GridColumnProps, nextProps: GridColumnProps) => {
  return (
    prevProps.isNewEvent === nextProps.isNewEvent &&
    prevProps.columnId === nextProps.columnId
  );
};

export default memo(GridColumn, areEqual);
