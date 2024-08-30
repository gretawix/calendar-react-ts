import { memo, ReactNode } from 'react';

import type { IconName } from '../../../types/main';
import ModalIcon from '../ModalIcon/ModalIcon';

type OneSettingProps = {
  iconName?: IconName | 'google-meets';
  children: ReactNode;
};

const OneSetting = ({ iconName, children }: OneSettingProps) => {
  const previewClasses = `${iconName ? 'has-icon ' : 'no-icon'} preview-setting modal-event-side-margins`;

  return (
    <div className="single-setting-section">
      <div className={previewClasses}>
        {iconName && <ModalIcon iconName={iconName} />}
        {children}
      </div>
    </div>
  );
};

export default memo(OneSetting);
