import { memo } from 'react';
import Button from '../../../Button/Button';

import './controlButtons.scss';
import useKeyDown from '../../../../hooks/useKeyDown';

type ControlButtonsProps = {
  onSaveClick: () => void;
};

const ControlButtons = ({ onSaveClick }: ControlButtonsProps) => {
  useKeyDown('Enter', onSaveClick);

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
