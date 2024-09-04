import { memo } from 'react';
import Button from '../../Button';

const ControlButtons = () => {
  return (
    <div className="event-control-buttons">
      <Button title="More options" />
      <Button title="Save" styleType="cta" type="submit" />
    </div>
  );
};

export default memo(ControlButtons);
