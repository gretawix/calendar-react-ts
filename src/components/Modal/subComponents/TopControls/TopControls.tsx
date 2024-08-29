import { memo } from 'react';
import MaterialSymbol from '../../../MaterialIcon/MaterialIcon';

import './topControls.scss';

const TopControls = () => {
  return (
    <div className="top-controls">
      <button type="button">
        <MaterialSymbol iconName="drag_handle" />
      </button>
      <button type="button">
        <MaterialSymbol iconName="close" />
      </button>
    </div>
  );
};

export default memo(TopControls);
