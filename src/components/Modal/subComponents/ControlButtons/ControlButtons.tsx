import { memo } from 'react';
import Button from '../../../Button/Button';

import './controlButtons.scss';

type ControlButtonsProps = {
  onSaveClick: () => void;
};

const ControlButtons = ({ onSaveClick }: ControlButtonsProps) => {
  return (
    <div className="event-control-buttons">
      <Button title="More options" />
      <Button
        title="Save"
        styleType="cta"
        id="save-event-btn"
        onClick={onSaveClick}
      />
    </div>
  );
};

export default memo(ControlButtons);
