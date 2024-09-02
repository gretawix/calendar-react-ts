import { memo } from 'react';
import Button from '../../../Button/Button';
import { useEvents } from '../../../../hooks/useEvents';

import './controlButtons.scss';

const ControlButtons = () => {
  const { saveEvent } = useEvents();

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
