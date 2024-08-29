import { memo } from 'react';
import Button from '../../../Button/Button';

import './controlButtons.scss';

const ControlButtons = () => {
  return (
    <div className="event-control-buttons">
      <Button title="More options" />
      <Button title="Save" styleType="cta" id="save-event-btn" />
    </div>
  );
};

export default memo(ControlButtons);
