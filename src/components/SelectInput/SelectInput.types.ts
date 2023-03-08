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
  size?: 'default_L' | 'default_M';
  error?: boolean;
  className?: string;
  style?: React.CSSProperties;
  selectStyles?: StylesConfig;
  onChange?: (e: any) => void;
}

export type IndicatorProps = {
  iconOpen: React.ReactNode
  iconClosed: React.ReactNode
  error: boolean
}