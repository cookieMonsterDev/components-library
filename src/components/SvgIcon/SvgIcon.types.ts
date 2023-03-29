export enum IconsEnum {
  loader = 'src/assets/icons/common/loader.svg',
  search = 'src/assets/icons/common/search.svg',
  hideShow = 'src/assets/icons/common/hideShow.svg',
  checkMark = 'src/assets/icons/common/checkMark.svg',
  menuClosed = 'src/assets/icons/common/menuClosed.svg',
  menuOpen = 'src/assets/icons/common/menuOpen.svg',
  calendar = 'src/assets/icons/common/calendar.svg',
  warningAlert = 'src/assets/icons/common/warningAlert.svg',
  errorAlert = 'src/assets/icons/common/errorAlert.svg',
  closeButton = 'src/assets/icons/common/closeButton.svg',
}

export type SvgIconProps = {
  src: IconsEnum | string;
  onClick?: (e: any) => void;
  size?: number;
  color?: colorType;
  rotate?: '0' | '90' | '180' | '270';
  className?: string;
  style?: React.CSSProperties;
  defaultStroke?: boolean;
};

export type colorType =
  | 'unset'
  | 'inherit'
  | 'white'
  | 'ultra-light-gray'
  | 'light-gray'
  | 'gray'
  | 'dark-gray'
  | 'ultra-dark-gray'
  | 'ultra-light-primary'
  | 'light-primary'
  | 'primary'
  | 'dark-primary'
  | 'error'
  | 'warning'
  | 'success';


  