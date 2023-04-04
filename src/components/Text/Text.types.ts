export enum TextVariantsEnum {
  Heading_1 = 'Heading_1',
  Heading_2 = 'Heading_2',
  Heading_3 = 'Heading_3',
  Heading_4 = 'Heading_4',
  Heading_5 = 'Heading_5',
  Subtitle_M = 'Subtitle_M',
  Subtitle_S = 'Subtitle_S',
  Body_L = 'Body_L',
  Body_M = 'Body_M',
  Caption = 'Caption',
}

export enum TagVariantsEnum {
  Heading_1 = 'h1',
  Heading_2 = 'h1',
  Heading_3 = 'h1',
  Heading_4 = 'h1',
  Heading_5 = 'h1',
  Subtitle_M = 'h2',
  Subtitle_S = 'h3',
  Body_L = 'p',
  Body_M = 'p',
  Caption = 'p',
}

export type TextProps = {
  variant?: TextVariantsEnum;
  children?: React.ReactNode;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
};
