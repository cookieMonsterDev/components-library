import { IconsEnum } from "@components/SvgIcon";

export enum CheckBoxVariantEnum {
  round = 'round',
  square = 'square',
  toggle = 'toggle',
}

export enum CheckBoxTypesEnum {
  checkbox = 'checkbox',
  radio = 'radio',
}

export type CheckBoxProps = {
  id?: string;
  name?: string;
  type?: CheckBoxTypesEnum;
  variant?: CheckBoxVariantEnum;
  checkMarkIcon?: string;
  value?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
};
 