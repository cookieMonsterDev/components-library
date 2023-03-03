import React from 'react';
import classNames from 'classnames';

import { SvgIcon, IconsEnum } from '@components/SvgIcon';

import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  id,
  variant = 'primary',
  size = 'md',
  width = 'content',
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  disabled,
  loading,
  style,
  className,
}) => {
  const buttonClass = classNames(
    styles.button,
    {
      [styles[`button_variant_${variant}`]]: variant,
      [styles[`button_size_${size}`]]: size,
      [styles[`button_width_${width}`]]: width,
      [styles[`button_icon_position_${iconPosition}`]]: iconPosition,
      [styles.disabled]: disabled,
      [styles.loading]: loading,
    },
    className
  );

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={loading || disabled ? () => null : onClick}
      style={style}
      type={type}
      id={id}
    >
      <div className={styles.loader}>
        <SvgIcon src={IconsEnum.loader} size={30} />
      </div>
      {icon && <SvgIcon src={icon} size={20} />}
      {text && <span>{text}</span>}
    </button>
  );
};

ButtonComponent.displayName = 'Button';
