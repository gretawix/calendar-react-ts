import { memo } from 'react';
import Button from '../../../Button/Button';
import { useEvents } from '../../../../hooks/useEvents';

import './controlButtons.scss';

type ControlButtonsProps = {
  inputRefs: { [key: string]: React.RefObject<HTMLInputElement> };
};

const ControlButtons = ({ inputRefs }: ControlButtonsProps) => {
  const { saveEvent } = useEvents();

  const handleSaveClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (inputRefs.title.current) {
      const titleValue = inputRefs.title.current.value;
      console.log(titleValue);
      saveEvent();
    }
  };

  return (
    <div className="event-control-buttons">
      <Button title="More options" />
      <Button
        title="Save"
        styleType="cta"
        id="save-event-btn"
        type="submit"
        onClick={handleSaveClick}
      />
    </div>
  );
};

export default memo(ControlButtons);
