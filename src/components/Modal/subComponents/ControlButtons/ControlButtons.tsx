import { memo } from 'react';
import Button from '../../../Button/Button';
import { useEvents } from '../../../../hooks/useEvents';
import useKeyDown from '../../../../hooks/useKeyDown';

import './controlButtons.scss';

const ControlButtons = () => {
  const { saveEvent } = useEvents();

  useKeyDown('Enter', saveEvent);

  return (
    <div className="event-control-buttons">
      <Button title="More options" />
      <Button
        title="Save"
        styleType="cta"
        id="save-event-btn"
        onClick={saveEvent}
      />
    </div>
  );
};

export default memo(ControlButtons);
