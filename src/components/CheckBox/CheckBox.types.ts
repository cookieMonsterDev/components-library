export type CheckBoxProps = {
  id?: string;
  name?: string;
  type?: "checkbox" | "radio";
  variant?: "round" | "square" | "toggle"; 
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
 