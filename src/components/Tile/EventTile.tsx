import { forwardRef, memo } from 'react';

import './eventTile.scss';

type TileProps = {
  existingEvent: boolean;
  title: string;
  startTime: number;
  eventLength: number;
};

const EventTile = forwardRef<HTMLDivElement, TileProps>(
  ({ existingEvent = false, title, startTime, eventLength }, ref) => {
    return (
      <div
        ref={ref}
        className={`event-tile regular ${!existingEvent ? 'placeholder' : ''} `}
      >
        <p className="event-tile-title">{title}</p>
        <p className="event-tile-time">
          {startTime} - {eventLength}
        </p>
      </div>
    );
  }
);

export default memo(EventTile);
