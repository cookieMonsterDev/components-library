import { IconsEnum } from '@components/SvgIcon';

export enum ButtonVariantEnum {
  primary = 'primary',
  secondary = 'secondary',
  outlined = 'outlined',
  text = 'text',
}

export type ButtonProps = {
  text: string;
  id?: string;
  variant?: ButtonVariantEnum;
  size?: 'sm' | 'md' | 'lg';
  width?: 'full' | 'content';
  icon?: IconsEnum;
  iconPosition?: 'left' | 'right';
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
};
