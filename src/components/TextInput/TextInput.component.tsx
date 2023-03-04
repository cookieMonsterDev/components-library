import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './TextInput.module.scss';
import { TextInputProps } from './TextInput.types';
import { Text, TextVariantsEnum } from '@components/Text';

export const TextInputComponent: React.FC<TextInputProps> = ({
  id,
  name,
  value,
  type = 'text',
  placeholder,
  errorText,
  direction = 'ltr',
  style,
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
      [styles[`input_error`]]: errorText,
      [styles[`input_icon`]]: type === 'password',
      [styles[`input_diretion_${direction}`]]: direction,
    },
    className
  );

  const handleChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
    valueRef.current = event.target.value;
    onChange && onChange(event);
  };

  const handleClickInside = () => setFocus(true);

  const handleClickOutside = () => setFocus(false);

  useEffect(() => {
    const listener = (event: Event) => {
      const el = containerRef?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      handleClickOutside();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [containerRef, handleClickOutside]);

  return (
    <div
      className={InputClass}
      style={style}
      onClick={handleClickInside}
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
      {errorText && (
        <label className={styles.errorText}>
          <Text variant={TextVariantsEnum.Caption}>{placeholder}</Text>
        </label>
      )}
    </div>
  );
};
