import React from 'react';
import styles from './Overlay.module.scss';
import classNames from 'classnames';
import { OverlayProps } from './Overlay.types';

export const OverlayComponent: React.FC<OverlayProps> = ({
  className,
  style,
  children,
}) => {
  const overlayClass = classNames(styles.overlay, className);

  return (
    <div className={overlayClass} style={style} role="overlay">
      {children}
    </div>
  );
};
