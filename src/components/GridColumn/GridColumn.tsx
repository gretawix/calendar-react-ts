import { memo } from 'react';
import EventTile from '../Tile/EventTile';
import './gridColumn.scss';
import { useEvents } from '../../hooks/useEvents';
import { useModal } from '../../hooks/useModal';

type GridColumnProps = {
  columnId: string;
  isNewEvent: boolean;
};

const GridColumn: React.FC<GridColumnProps> = ({ columnId, isNewEvent }) => {
  const { newEventTileRef, newEventData, initNewEvent, cancelEventCreation } =
    useEvents();
  const { isModalOpen } = useModal();

  return (
    <div
      className="hours-cells-column"
      onClick={(event) =>
        !isModalOpen ? initNewEvent(event) : cancelEventCreation()
      }
      id={columnId}
    >
      {isNewEvent && (
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
    prevProps.isNewEvent === nextProps.isNewEvent &&
    prevProps.columnId === nextProps.columnId
  );
};

export default memo(GridColumn, areEqual);
