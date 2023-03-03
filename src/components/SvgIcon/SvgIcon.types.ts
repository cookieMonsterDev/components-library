export enum IconsEnum {
  loader = 'src/assets/icons/common/loader.svg',
  search = 'src/assets/icons/common/search.svg',
  hideShow = 'src/assets/icons/common/hideShow.svg',
}

export type SvgIconProps = {
  src: IconsEnum | string; // use string for icons from backend
  onClick?: (e: any) => void;
  size?: number;
  color?: colorType;
  rotate?: '90' | '180' | '270';
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


  