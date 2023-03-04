export type TextInputProps = {
  id?: string;
  name?: string;
  value?: any;
  type?: 'text' | 'password';
  direction?: 'rtl' | 'ltr';
  placeholder?: string;
  errorText?: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  ref?: React.MutableRefObject<HTMLInputElement | null>
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
};
