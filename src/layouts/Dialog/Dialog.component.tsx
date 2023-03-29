import React from 'react';
import styles from './Dialog.module.scss';
import { DialogProps } from './Dialog.types';
import classNames from 'classnames';

export const DialogComponent: React.FC<DialogProps> = ({
  className,
  style,
  children,
}) => {
  const DialogClass = classNames(styles.dialog, className);

  return (
    <dialog open className={DialogClass} style={style} role="alertdialog">
      {children}
    </dialog>
  );
};
