import { memo } from 'react';
import MaterialIcon from '../../MaterialIcon';

import type { IconName } from '../../../types';

type ModalIconProps = {
  iconName: IconName | 'google-meets';
};

const ModalIcon = ({ iconName }: ModalIconProps) => {
  if (iconName === 'google-meets') {
    return (
      <img
        alt="google meeting icon"
        src="./logo_meet_2020q4_192px.svg"
        className="custom-icon"
      />
    );
  }
  return (
    <div className="modal-icon">
      <MaterialIcon iconName={iconName} small={true} />
    </div>
  );
};

export default memo(ModalIcon);
