import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import styles from './TextInput.module.scss';
import { TextInputProps } from './TextInput.types';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

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
  onChange,
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [show, setShow] = useState(type === 'password' ? false : true);
  const [focus, setFocus] = useState(false);

  const InputClass = classNames(styles.input, {
    [styles[`input_focus`]]: focus,
    [styles[`input_active`]]: ref.current?.value || focus || value,
    [styles[`input_error`]]: errorText,
    [styles[`input_icon`]]: type === 'password',
    [styles[`input_diretion_${direction}`]]: direction,
  },
  className);

  const handlePassword = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setShow((prev) => !prev);
    ref.current?.focus();
  };

  return (
    <div className={InputClass} style={style}>
      <input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        ref={ref}
        type={show ? 'text' : 'password'}
      />
      {type === 'password' && (
        <span className={styles.icon}>
          <SvgIcon
            src={IconsEnum.hideShow}
            size={18}
            color={'ultra-light-gray'}
            onClick={handlePassword}
          />
        </span>
      )}
      {placeholder && <label className={styles.label}>{placeholder}</label>}
      {errorText && <label className={styles.errorText}>{errorText}</label>}
    </div>
  );
};
