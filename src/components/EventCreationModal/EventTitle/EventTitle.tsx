import { memo } from 'react';
import './eventTitle.scss';

type EventTitleProps = {
  titleRef: React.RefObject<HTMLInputElement>;
};

const EventTitle = ({ titleRef }: EventTitleProps) => {
  return (
    <div className="event-title">
      <label className="text-input-label large" htmlFor="title">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Add title"
          className="text-input large"
          ref={titleRef}
          autoFocus
        />
      </label>
    </div>
  );
};

export default memo(EventTitle);
