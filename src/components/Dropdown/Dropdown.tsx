import { memo, useState } from 'react';
import classNames from 'classnames';

import './dropdown.scss';
import '../../styles/buttons.scss';

type DropdownProps = { options: string[] };

const Dropdown = ({ options }: DropdownProps) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const generateId = (text: string) => {
    return text.toLowerCase().replace(/\s/g, '-').replace(/[()]/g, '');
  };

  const selectItem = (item: string) => {
    setSelected(item);
    setIsOpen(false);
  };

  const selectInputClass = classNames('select-input', {
    open: isOpen,
  });

  return (
    <div className={selectInputClass}>
      <button
        type="button"
        className="dropdown"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="dropdown-label">{selected}</span>
        <span className="dropdown-arrow">
          <img src="./arrow-drop-down.svg" />
        </span>
      </button>

      {isOpen && (
        <ul className="repeat-options select-options">
          {options.map((item) => {
            const itemClass = classNames({
              selected: selected === item,
            });

            return (
              <li
                key={item}
                id={generateId(item)}
                className={itemClass}
                onClick={() => selectItem(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default memo(Dropdown);
