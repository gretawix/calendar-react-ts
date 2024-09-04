import { memo } from 'react';
import MaterialSymbol from '../../MaterialIcon';
import { useNewEvent } from '../../../hooks/useNewEvent';
import useKeyDown from '../../../hooks/useKeyDown';

import './topControls.scss';

const TopControls = () => {
  const { cancelEventCreation } = useNewEvent();

  useKeyDown('Escape', cancelEventCreation);

  return (
    <div className="top-controls">
      <button type="button">
        <MaterialSymbol iconName="drag_handle" />
      </button>
      <button type="button" onClick={cancelEventCreation}>
        <MaterialSymbol iconName="close" />
      </button>
    </div>
  );
};

export default memo(TopControls);
