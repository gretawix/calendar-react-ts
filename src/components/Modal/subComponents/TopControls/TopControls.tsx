import { memo } from 'react';
import useKeyDown from '../../../../hooks/useKeyDown';
import MaterialSymbol from '../../../MaterialIcon/MaterialIcon';

import './topControls.scss';

type TopControlsProps = {
  onCloseModal: () => void;
};

const TopControls = ({ onCloseModal }: TopControlsProps) => {
  useKeyDown('Escape', onCloseModal);

  return (
    <div className="top-controls">
      <button type="button">
        <MaterialSymbol iconName="drag_handle" />
      </button>
      <button type="button" onClick={onCloseModal}>
        <MaterialSymbol iconName="close" />
      </button>
    </div>
  );
};

export default memo(TopControls);
