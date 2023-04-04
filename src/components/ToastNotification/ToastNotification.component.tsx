import { Button, ButtonVariantEnum } from '@components/Button';
import { colorType, IconsEnum, SvgIcon } from '@components/SvgIcon';
import { Text, TextVariantsEnum } from '@components/Text';
import classNames from 'classnames';
import React, { useCallback } from 'react';
import styles from './ToastNotification.module.scss';
import { ToastNotificationProps } from './ToastNotification.types';

export const ToastNotificationComponent: React.FC<ToastNotificationProps> = ({
  variant = 'success',
  title,
  message,
  className,
  style,
  icon,
  actionButtontext,
  actionButtonHandler,
  closeButtonHandler,
}) => {
  const dIcon = useCallback((variant: string): string => {
    switch (variant) {
      case 'warning': {
        return IconsEnum.warningAlert;
      }
      case 'success': {
        return IconsEnum.successAlert;
      }
      case 'change': {
        return IconsEnum.changeAlert;
      }
      default:
        return IconsEnum.errorAlert;
    }
  }, []);

  const dIconColor = useCallback((variant: string): colorType => {
    switch (variant) {
      case 'warning': {
        return 'warning';
      }
      case 'success': {
        return 'primary';
      }
      case 'change': {
        return 'warning';
      }
      default:
        return 'error';
    }
  }, []);

  const dialogContainer = classNames(styles.dialog, className);

  const iconContainer = classNames(styles.icon_container, {
    [styles[`icon_container_variant_${variant}`]]: variant,
  });

  const infoContent = classNames(styles.info_content, {
    [styles[`info_content_variant_${variant}`]]: variant,
  });

  return (
    <dialog open className={dialogContainer} style={style} role="notification">
      <section className={styles.info_container}>
        {icon ? (
          icon
        ) : (
          <div className={iconContainer}>
            <SvgIcon
              src={dIcon(variant)}
              color={dIconColor(variant)}
              size={34}
            />
          </div>
        )}
        <div className={infoContent}>
          {title && <Text variant={TextVariantsEnum.Subtitle_M} title={title}>{title}</Text>}
          {message && <Text variant={TextVariantsEnum.Caption} title={message}>{message}</Text>}
        </div>
      </section>
      <section className={styles.buttons_container}>
        {actionButtontext && (
          <Button
            text={actionButtontext}
            onClick={actionButtonHandler && actionButtonHandler}
            variant={ButtonVariantEnum.outlined}
            size="sm"
          />
        )}
        {closeButtonHandler && (
          <SvgIcon
            src={IconsEnum.closeButton}
            color="ultra-light-gray"
            onClick={closeButtonHandler}
            size={30}
          />
        )}
      </section>
    </dialog>
  );
};
