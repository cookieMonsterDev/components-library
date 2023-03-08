import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import styles from './TextInput.module.scss';
import { TextInputProps } from './TextInput.types';
import { Text, TextVariantsEnum } from '@components/Text';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export const TextInputComponent: React.FC<TextInputProps> = ({
  id,
  name,
  value,
  type = 'text',
  placeholder,
  helperText,
  direction = 'ltr',
  size = 'default_L',
  style,
  error = false,
  className,
  icon,
  ref,
  onChange,
}) => {
  const valueRef = useRef<any | null>(null);
  const containerRef = useRef<HTMLInputElement | null>(null);
  const [focus, setFocus] = useState(false);

  const InputClass = classNames(
    styles.input,
    {
      [styles[`input_focus`]]: focus,
      [styles[`input_active`]]: valueRef.current || focus || value,
      [styles[`input_size_${size}`]]: size,
      [styles[`input_helperText`]]: helperText,
      [styles[`input_error`]]: error,
      [styles[`input_icon`]]: type === 'password',
      [styles[`input_diretion_${direction}`]]: direction,
    },
    className
  );

  const handleChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
    valueRef.current = event.target.value;
    onChange && onChange(event);
  };

  useOnClickOutside(containerRef, () => setFocus(false))

  return (
    <div
      className={InputClass}
      style={style}
      onClick={() => setFocus(true)}
      ref={containerRef}
    >
      <input
        id={id}
        name={name}
        onChange={handleChenge}
        value={value}
        ref={ref}
        type={type}
      />
      {icon && <span className={styles.icon}>{icon}</span>}
      {placeholder && (
        <label className={styles.label}>
          <Text variant={TextVariantsEnum.Body_L}>{placeholder}</Text>
        </label>
      )}
      {helperText && (
        <label className={styles.helperText}>
          <Text variant={TextVariantsEnum.Caption}>{helperText}</Text>
        </label>
      )}
    </div>
  );
};
