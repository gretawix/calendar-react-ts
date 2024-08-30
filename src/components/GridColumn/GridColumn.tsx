import { memo } from 'react';

import './gridColumn.scss';

type GridColumnProps = {
  onClick: () => void;
};

const GridColumn: React.FC<GridColumnProps> = ({ onClick }) => {
  return <div className="hours-cells-column" onClick={onClick}></div>;
};

export default memo(GridColumn);
