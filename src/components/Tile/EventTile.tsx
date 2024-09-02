import { memo } from 'react';
import { useEvents } from '../../hooks/useEvents';

import './eventTile.scss';

type TyleProps = {
  existingEvent?: boolean;
};

const EventTile = ({ existingEvent = false }: TyleProps) => {
  const { eventTileRef } = useEvents();

  return (
    <div
      ref={eventTileRef}
      className={`event-tile regular ${!existingEvent ? 'placeholder' : ''}`}
    >
      <p className="event-tile-title">(no title)</p>
      <p className="event-tile-time">08:30 - 09:30</p>
    </div>
  );
};

export default memo(EventTile);
