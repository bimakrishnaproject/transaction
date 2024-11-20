import { TouchableOpacityProps } from 'react-native';

export interface IconSet {
  icons: Array<any>;
}

export interface SvgIconProps {
  iconSet: IconSet;
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  offset?: number; // some icon might have different padding, use this to offset it
  width?: number;
  height?: number;
  viewBoxWidthPercentage?: number;
  viewBoxHeightPercentage?: number;
}

export interface IconMap {
  name: string;
  paths: Array<string>;
  attrs?: Array<IconAttrs>;
}

interface IconAttrs {
  fill?: string;
}

// Please sort by name when adding new icon
export type IconName =
  | 'radio'
  | 'radio-active'
  | 'chevron-down'
  | 'circle-filled'
  | 'arrow-right'
  | 'search'
  | 'copy';

export interface IIcon
  extends Omit<SvgIconProps, 'iconSet' | 'name'>,
    Pick<TouchableOpacityProps, 'onPress' | 'style'> {
  name: IconName;
  color?: string;
  strokeWidth?: number;
  offset?: number;
}

export { default as Icon } from './Icon';
