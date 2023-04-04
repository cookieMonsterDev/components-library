export type ToastNotificationProps = {
  variant?: 'success' | 'warning' | 'error' | 'change';
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  actionButtontext?: string;
  actionButtonHandler?: () => void;
  closeButtonHandler?: () => void;
  className?: string;
  style?: React.CSSProperties;
}