import { memo, useCallback } from 'react';
import './eventTitle.scss';
import { useNewEvent } from '../../../hooks/useNewEvent';

type EventTitleProps = {
  title: string;
  updateTitle: React.Dispatch<React.SetStateAction<string>>;
};

const EventTitle = ({ title, updateTitle }: EventTitleProps) => {
  const { setNewEventData } = useNewEvent();

  const setNewTitle = useCallback(() => {
    setNewEventData((prevData) => {
      const updatedData = { ...prevData };
      updatedData.title = title;

      return updatedData;
    });
  }, [setNewEventData, title]);

  return (
    <div className="event-title">
      <label className="text-input-label large" htmlFor="title">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Add title"
          className="text-input large"
          autoFocus
          value={title}
          onChange={(event) => updateTitle(event.target.value)}
          onBlur={setNewTitle}
        />
      </label>
    </div>
  );
};

export default memo(EventTitle);
