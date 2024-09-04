import { memo } from 'react';

import type { IconName } from '../../types';

import './materialIcon.scss';

type MaterialSymbolProps = {
  iconName: IconName;
  small?: boolean;
};

const MaterialSymbol = ({ iconName, small = false }: MaterialSymbolProps) => {
  return (
    <i className={`material-symbols-outlined ${small ? 'small' : ''}`}>
      {iconName}
    </i>
  );
};

export default memo(MaterialSymbol);
