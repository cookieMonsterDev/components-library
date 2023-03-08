import React, { useState } from 'react';
import styles from './Avatar.module.scss';
import classNames from 'classnames';
import { Text, TextVariantsEnum } from '@components/Text';
import { AvatarProps } from './Avatar.types';

export const AvatarComponent: React.FC<AvatarProps> = ({
  size = 'md',
  text,
  src,
  alt,
  color = 'var(--orange)',
  className,
  style,
  onClick,
}) => {
  const [image, setImage] = useState(true);

  const AvatarTextSize = (size: string) => {
    switch (true) {
      case size === 'sm': {
        return TextVariantsEnum.Body_M;
      }
      case size === 'lg': {
        return TextVariantsEnum.Heading_3;
      }
      default: {
        return TextVariantsEnum.Body_L;
      }
    }
  };

  const AvatarText = (text: string): string => {
    const [name, surname] = text.split(' ');

    if (!surname) return name.slice(0, 2).toLocaleUpperCase();

    return `${name[0].toLocaleUpperCase()}${surname[0].toUpperCase()}`;
  };

  const AvatarClass = classNames(
    styles.avatar,
    {
      [styles[`avatar_size_${size}`]]: size,
    },
    className
  );

  return (
    <div
      onClick={onClick}
      className={AvatarClass}
      style={{ ...style, background: color }}
    >
      {(!src || !image) && text && (
        <Text variant={AvatarTextSize(size)}>{AvatarText(text)}</Text>
      )}
      {src && image && (
        <img src={src} alt={alt} onError={() => setImage(false)} />
      )}
    </div>
  );
};
