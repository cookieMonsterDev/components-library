import React, { createElement } from 'react';
import classNames from 'classnames';
import { TextProps, TagVariantsEnum } from './Text.types';
import styles from './Text.module.scss';

export const TextComponent: React.FC<TextProps> = ({
  variant = 'Caption',
  children,
  className,
  style,
  title,
}) => {
  const tag = TagVariantsEnum[variant as keyof typeof TagVariantsEnum];

  const TextClassName = classNames(
    styles.text,
    {
      [styles[`text_variant_${variant}`]]: variant,
    },
    className
  );

  return createElement(tag, { className: TextClassName, style, title }, children);
};
