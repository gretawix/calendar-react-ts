import { memo, useCallback } from 'react';
import Button from '../../../Button/Button';
import { useModal } from '../../../../hooks/useModal';
import useKeyDown from '../../../../hooks/useKeyDown';

import './controlButtons.scss';

const ControlButtons = () => {
  const { closeModal } = useModal();

  const saveEvent = useCallback(() => {
    closeModal();
    //handleactive column and event tile

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
