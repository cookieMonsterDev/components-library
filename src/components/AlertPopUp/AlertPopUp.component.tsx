import React from 'react';
import styles from './AlertPopUp.module.scss';
import { AlertPopUpProps } from './AlertPopUp.types';
import { Overlay } from '@layouts/Overlay';
import { Dialog } from '@layouts/Dialog';
import { Text, TextVariantsEnum } from '@components/Text';
import { SvgIcon, IconsEnum } from '@components/SvgIcon';
import { Button, ButtonVariantEnum } from '@components/Button';

export const AlertPopUpComponent: React.FC<AlertPopUpProps> = ({
  variant = 'warning',
  title,
  message,
  acceptButtonText,
  rejectButtonText,
  acceptButtonHandler,
  rejectButtonHandler,
  closeButtonHandler,
}) => {
  const icon = (variant: string): string => {
    switch (variant) {
      case 'warning': {
        return IconsEnum.warningAlert;
      }
      default:
        return IconsEnum.errorAlert;
    }
  };

  return (
    <Overlay>
      <Dialog className={styles.container}>
        <span className={styles.closeButton}>
          <SvgIcon
            src={IconsEnum.closeButton}
            color="ultra-light-gray"
            onClick={closeButtonHandler && closeButtonHandler}
          />
        </span>
        <span className={styles.icon}>
          <SvgIcon src={icon(variant)} color={variant} size={48} />
        </span>
        {title && (
          <Text className={styles.title} variant={TextVariantsEnum.Heading_2}>
            {title}
          </Text>
        )}
        {message && (
          <Text className={styles.title} variant={TextVariantsEnum.Body_M}>
            {message}
          </Text>
        )}
        <section className={styles.buttons}>
          {acceptButtonText && (
            <Button
              text={acceptButtonText}
              onClick={acceptButtonHandler && acceptButtonHandler}
            />
          )}
          {rejectButtonText && (
            <Button
              text={rejectButtonText}
              variant={ButtonVariantEnum.outlined}
              onClick={rejectButtonHandler && rejectButtonHandler}
            />
          )}
        </section>
      </Dialog>
    </Overlay>
  );
};
