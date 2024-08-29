import { memo } from 'react';
import './eventTitle.scss';

const EventTitle = () => {
  return (
    <div className="event-title">
      <label className="text-input-label large" htmlFor="title">
        <input
          type="text"
          id="title"
          placeholder="Add title"
          className="text-input large"
          autoFocus
        />
      </label>
    </div>
  );
};

export default memo(EventTitle);
