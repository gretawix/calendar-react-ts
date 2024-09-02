import { memo } from 'react';
import Tile from '../Tile/Tile';

import type { ShowNewEventTileFn } from '../../contexts/contextTypes';
import './gridColumn.scss';

type GridColumnProps = {
  onClick: ShowNewEventTileFn;
  columnId: string;
  tileIsOpen: boolean;
};

const GridColumn: React.FC<GridColumnProps> = ({
  columnId,
  tileIsOpen,
  onClick,
}) => {
  return (
    <div
      className="hours-cells-column"
      onClick={(event) => onClick(event, columnId)}
      id={columnId}
    >
      {tileIsOpen && <Tile />}
    </div>
  );
};

const areEqual = (prevProps: GridColumnProps, nextProps: GridColumnProps) => {
  return (
    prevProps.tileIsOpen === nextProps.tileIsOpen &&
    prevProps.columnId === nextProps.columnId
  );
};

export default memo(GridColumn, areEqual);
