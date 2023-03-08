import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { SelectInputProps } from './SelectInput.types';
import Select, { StylesConfig } from 'react-select';
import styles from './SelectInput.module.scss';
import { Text, TextVariantsEnum } from '@components/Text';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Indicator from './Indicator.compoent';

export const SelectInputComponent: React.FC<SelectInputProps> = ({
  id,
  name,
  options,
  defaultValue,
  iconClosed,
  iconOpen = iconClosed,
  placeholder,
  helperText,
  error = false,
  className,
  style,
  selectStyles,
  direction = 'ltr',
  size = 'default_L',
  onChange,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [focus, setFocus] = useState(false);

  const SelectClass = classNames(
    styles.container,
    {
      [styles[`container_error`]]: error,
      [styles[`container_focus`]]: focus,
      [styles[`container_size_${size}`]]: size,
      [styles[`container_diretion_${direction}`]]: direction,
    },
    className
  );

  const defaultStyles: StylesConfig = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      backgroundColor: 'var(--white)',
      color: state.isSelected ? 'var(--primary)' : 'var(--black)',
      ':active': {
        ...defaultStyles[':active'],
        color: 'var(--white)',
        backgroundColor: 'var(--white)',
      },
      ':hover': {
        ...defaultStyles[':hover'],
        color: 'var(--light-primary)',
      },
    }),
    ...selectStyles,
  };

  useOnClickOutside(containerRef, () => setFocus(false));

  return (
    <div
      className={SelectClass}
      ref={containerRef}
      onClick={() => setFocus(true)}
      style={style}
    >
      <Select
        id={id}
        name={name}
        className={styles.select}
        options={options}
        defaultValue={defaultValue}
        placeholder={<label className={styles.label}>{placeholder}</label>}
        styles={{ ...defaultStyles }}
        onChange={(selectedOption) =>
          onChange && onChange(selectedOption.value)
        }
        components={{
          DropdownIndicator: (props) =>
            Indicator({ ...props, iconClosed, iconOpen, error }),
          IndicatorSeparator: () => null,
        }}
      />
      {helperText && (
        <label className={styles.helperText}>
          <Text variant={TextVariantsEnum.Caption}>{helperText}</Text>
        </label>
      )}
    </div>
  );
};
