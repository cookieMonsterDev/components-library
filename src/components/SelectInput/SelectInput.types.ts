import { GroupBase, OptionsOrGroups, StylesConfig } from "react-select";

export type SelectInputProps = {
  id?: string,
  name?: string,
  options?: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
  defaultValue?: any;
  iconOpen?: React.ReactNode;
  iconClosed?: React.ReactNode;
  placeholder?: string;
  helperText?: string;
  direction?: 'rtl' | 'ltr';
  error?: boolean;
  className?: string;
  style?: React.CSSProperties;
  selectStyles?: StylesConfig;
  onChange?: (e: any) => void;
}