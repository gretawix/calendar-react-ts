import { memo, useState } from 'react';
import classNames from 'classnames';

type DropdownProps = { options: string[]; initialValue: string };

const Dropdown = ({ options, initialValue }: DropdownProps) => {
  const [selected, setSelected] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

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
