import React from 'react';
import classNames from 'classnames';
import styles from './CheckBox.module.scss';
import { CheckBoxProps } from './CheckBox.types';
import { IconsEnum } from '@components/SvgIcon';

export const CheckBoxComponent: React.FC<CheckBoxProps> = ({
  id,
  name,
  type = 'checkbox',
  variant = 'round',
  value,
  checked,
  checkMarkIcon = IconsEnum.checkMark,
  defaultChecked,
  className,
  style,
  onClick,
  onChange,
}) => {

  const checkBoxClass = classNames(
    styles.checkBox,
    {
      [styles[`checkBox_variant_${variant}`]]: variant,
    },
    className
  );

  const BackgroundStyle =
    variant === 'square'
      ? {
          backgroundImage: `url(${checkMarkIcon})`,
          backgroundSize: '10px 10px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }
      : {};

  return (
    <div className={checkBoxClass}>
      <input
        id={id}
        name={name}
        type={type}
        style={{ ...BackgroundStyle, ...style }}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        onClick={onClick}
        onChange={onChange}
      />
    </div>
  );
};
