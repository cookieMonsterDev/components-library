
export type AvatarProps = {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  src?: string;
  alt?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void | undefined;
};
