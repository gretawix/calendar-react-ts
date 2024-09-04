import { memo } from 'react';
import Button from '../../Button';
import { useNewEvent } from '../../../hooks/useNewEvent';

import './controlButtons.scss';
import type { InputRefs } from '../../../types';

type ControlButtonsProps = {
  inputRefs: InputRefs;
};

const ControlButtons = ({ inputRefs }: ControlButtonsProps) => {
  const { saveEvent, newEventData } = useNewEvent();

  const handleSaveClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (inputRefs.title.current) {
      const titleValue = inputRefs.title.current.value;
      console.log(
        titleValue,
        inputRefs.date.current?.value ?? newEventData.day
      );
      saveEvent();
    }
  };

  return (
    <div className="event-control-buttons">
      <Button title="More options" />
      <Button
        title="Save"
        styleType="cta"
        type="submit"
        onClick={handleSaveClick}
      />
    </div>
  );
};

export default memo(ControlButtons);
