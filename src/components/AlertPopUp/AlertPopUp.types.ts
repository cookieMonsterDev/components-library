export type AlertPopUpProps = {
  variant?: 'warning' | 'error';
  title?: string;
  message?: string;
  acceptButtonText?: string;
  rejectButtonText?: string;
  acceptButtonHandler?: () => void;
  rejectButtonHandler?: () => void;
  closeButtonHandler?: () => void;
}