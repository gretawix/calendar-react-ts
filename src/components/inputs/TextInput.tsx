import { forwardRef, memo } from 'react';

type TextInputProps = {
  value: string;
  id: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ value, id, className, ...rest }, ref) => {
    return (
      <label htmlFor={id}>
        <input
          type="text"
          id={id}
          name={id}
          className={`standard-input ${className}`}
          value={value}
          ref={ref}
          {...rest}
        />
      </label>
    );
  }
);

export default memo(TextInput);
