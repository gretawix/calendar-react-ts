import { memo, useState } from 'react';

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

  return (
    <div className={`select-input ${isOpen ? 'open' : ''}`}>
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
            return (
              <li
                key={item}
                id={generateId(item)}
                className={selected === item ? 'selected' : ''}
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
