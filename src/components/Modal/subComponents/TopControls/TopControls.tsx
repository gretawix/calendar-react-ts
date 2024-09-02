import { memo } from 'react';
import useKeyDown from '../../../../hooks/useKeyDown';
import MaterialSymbol from '../../../MaterialIcon/MaterialIcon';
import { useModal } from '../../../../hooks/useModal';

import './topControls.scss';

const TopControls = () => {
  const { closeModal } = useModal();

  useKeyDown('Escape', closeModal);

  return (
    <div className="top-controls">
      <button type="button">
        <MaterialSymbol iconName="drag_handle" />
      </button>
      <button type="button" onClick={closeModal}>
        <MaterialSymbol iconName="close" />
      </button>
    </div>
  );
};

export default memo(TopControls);
