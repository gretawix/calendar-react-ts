import { forwardRef, memo } from 'react';

type TextInputProps = {
  defaultValue: string;
  id: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ defaultValue, id, className, ...rest }, ref) => {
    return (
      <label htmlFor={id}>
        <input
          type="text"
          id={id}
          name={id}
          className={`standard-input ${className}`}
          defaultValue={defaultValue}
          ref={ref}
          {...rest}
        />
      </label>
    );
  }
);

export default memo(TextInput);
