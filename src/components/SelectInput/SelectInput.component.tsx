import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { SelectInputProps } from './SelectInput.types';
import Select, {
  components,
  DropdownIndicatorProps,
  StylesConfig,
} from 'react-select';
import styles from './SelectInput.module.scss';
import { Text, TextVariantsEnum } from '@components/Text';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

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
  direction,
  onChange,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [focus, setFocus] = useState(false);

  const SelectClass = classNames(
    styles.container,
    {
      [styles[`container_error`]]: error,
      [styles[`container_focus`]]: focus,
      [styles[`input_diretion_${direction}`]]: direction,
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

  const Indicator = (props: DropdownIndicatorProps) => {
    const {
      selectProps: { menuIsOpen },
    } = props;

    return (
      <components.DropdownIndicator {...props}>
        {props.isFocused || menuIsOpen ? iconOpen || (
          <SvgIcon
            src={IconsEnum.menuOpen}
            size={12}
            color={error ? 'error' : 'primary'}
          />
        ) : ( iconClosed ||
          <SvgIcon
            src={IconsEnum.menuClosed}
            size={12}
            color={'ultra-light-gray'}
          />
        )}
      </components.DropdownIndicator>
    );
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
          DropdownIndicator: Indicator,
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
