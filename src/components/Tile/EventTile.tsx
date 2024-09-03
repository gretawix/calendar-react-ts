import { forwardRef, memo } from 'react';

import './eventTile.scss';
import { cellHeightInPx } from '../../constants/constants';
import { getTime } from '../../utils/timeCalculations';

type TileProps = {
  existingEvent: boolean;
  title: string;
  startTime: number;
  eventLength: number;
};

const EventTile = forwardRef<HTMLDivElement, TileProps>(
  ({ existingEvent = false, title, startTime, eventLength }, ref) => {
    const distanceFromTop = (startTime / 60) * cellHeightInPx;
    let tileLength = (eventLength / 60) * cellHeightInPx;

    let eventLengthClass = 'regular';
    if (eventLength <= 15) {
      eventLengthClass = 'shortest';
      tileLength = cellHeightInPx / 4;
    } else if (eventLength <= 30) {
      eventLengthClass = 'short';
    } else if (eventLength > 60) {
      eventLengthClass = 'long';
    }

    return (
      <div
        ref={ref}
        className={`event-tile regular ${!existingEvent ? 'placeholder' : ''} ${eventLengthClass}`}
        style={{ top: distanceFromTop, height: tileLength }}
      >
        <p className="event-tile-title">{title}</p>
        <p className="event-tile-time">
          {getTime(startTime)} - {getTime(startTime + eventLength)}
        </p>
      </div>
    );
  }
);

export default memo(EventTile);
