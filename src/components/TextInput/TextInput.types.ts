export enum TextInputVariantEnum {
  text = 'text',
  password = 'password',
}

export enum TextInputDirectionEnum {
  rtl = 'rtl',
  ltr = 'ltr',
}

export type TextInputProps = {
  id?: string;
  name?: string;
  value?: any;
  type?: TextInputVariantEnum;
  direction?: TextInputDirectionEnum;
  placeholder?: string;
  errorText?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
};
