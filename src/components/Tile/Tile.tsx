import { memo } from 'react';

import './tile.scss';

type TyleProps = {
  existingEvent?: boolean;
};

const Tile = ({ existingEvent = false }: TyleProps) => {
  return (
    <div
      className={`event-tile regular ${!existingEvent ? 'placeholder' : ''}`}
    >
      <p className="event-tile-title">(no title)</p>
      <p className="event-tile-time">08:30 - 09:30</p>
    </div>
  );
};

export default memo(Tile);
