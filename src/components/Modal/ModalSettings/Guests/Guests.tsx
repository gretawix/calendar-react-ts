import { memo } from 'react';

import './guests.scss';

const Guests = ({ preview = true }: { preview?: boolean }) => {
  if (preview) {
    return <p className="guests-preview">Add guests</p>;
  }
  return (
    <div className="guests-settings">
      <label htmlFor="guests">
        <input
          type="text"
          id="guests"
          className="standard-input "
          placeholder="Add guests"
        />
      </label>
    </div>
  );
};

export default memo(Guests);
