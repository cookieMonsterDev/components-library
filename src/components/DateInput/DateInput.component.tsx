import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './DateInput.module.scss';
import { DateInputProps } from './DateInput.types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Text, TextVariantsEnum } from '@components/Text';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

export const DateInputComponent: React.FC<DateInputProps> = ({
  id,
  name,
  value,
  placeholder,
  helperText,
  direction = 'ltr',
  size = 'default_L',
  style,
  error = false,
  className,
  placement = 'bottom-start',
  icon,
  dateFormat,
  timeFormat,
  onChange,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [focus, setFocus] = useState(false);

  const DateClass = classNames(
    styles.container,
    {
      [styles[`container_size_${size}`]]: size,
      [styles[`container_focus`]]: focus,
      [styles[`container_error`]]: error,
      [styles[`container_diretion_${direction}`]]: direction,
    },
    className
  );

  useOnClickOutside(containerRef, () => setFocus(false));

  console.log(placement);

  return (
    <div
      className={DateClass}
      ref={containerRef}
      onClick={() => setFocus(true)}
      style={style}
    >
      <DatePicker
        id={id}
        name={name}
        selected={value}
        onChange={onChange}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        placeholderText={placeholder}
        showPopperArrow={false}
        popperPlacement={placement}
        popperClassName={styles.popper}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 0],
            },
          },
        ]}
      />
      {icon ? (
        <span className={styles.icon}>{icon}</span>
      ) : (
        <span className={styles.icon}>
          <SvgIcon
            src={IconsEnum.calendar}
            size={18}
            color={error ? 'error' : 'primary'}
          />
        </span>
      )}
      {helperText && (
        <label className={styles.helperText}>
          <Text variant={TextVariantsEnum.Caption}>{helperText}</Text>
        </label>
      )}
    </div>
  );
};
