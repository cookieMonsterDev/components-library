export type DateInputProps = {
  id?: string;
  name?: string;
  value?: any;
  direction?: 'rtl' | 'ltr';
  size?: 'default_L' | 'default_M';
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  placement?: placementType;
  dateFormat?: string;
  timeFormat?: string;
  onChange: (
    date: Date,
    event: React.SyntheticEvent<any, Event> | undefined
  ) => void;
};

export type placementType =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';
