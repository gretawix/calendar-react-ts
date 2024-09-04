import { memo } from 'react';

import type { IconName } from '../../types';

import './materialIcon.scss';
import classNames from 'classnames';

type MaterialSymbolProps = {
  iconName: IconName;
  small?: boolean;
};

const MaterialSymbol = ({ iconName, small = false }: MaterialSymbolProps) => {
  const iconClass = classNames('material-symbols-outlined', {
    small,
  });

  return <i className={iconClass}>{iconName}</i>;
};

export default memo(MaterialSymbol);
