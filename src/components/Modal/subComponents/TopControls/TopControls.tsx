import { memo } from 'react';
import MaterialSymbol from '../../../MaterialIcon/MaterialIcon';
import { useEvents } from '../../../../hooks/useEvents';

import './topControls.scss';

const TopControls = () => {
  const { cancelEventCreation } = useEvents();

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
