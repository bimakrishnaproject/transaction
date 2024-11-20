import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { IconMap, IIcon, SvgIconProps } from '.';
import selection from './selection.json';

const SvgIcon: React.FC<SvgIconProps> = ({
  iconSet,
  size = 32,
  color,
  name,
  offset = 0,
  strokeWidth = 1,
  width,
  height,
  viewBoxWidthPercentage,
  viewBoxHeightPercentage,
}) => {
  const viewBoxMax = 1024;
  const localOffset = (offset / 2) * -viewBoxMax;
  const offsetedViewBox = viewBoxMax - localOffset;

  const currentIcon: IconMap | undefined = useMemo(() => {
    return iconSet.icons
      .map((i: any) => {
        return {
          name: i.properties.name,
          paths: i.icon.paths,
          attrs: i.attrs,
        } as IconMap;
      })
      .find((i: IconMap) => {
        return i.name === name;
      });
  }, [iconSet, name]);

  if (currentIcon === undefined) {
    return null;
  }

  const paths = currentIcon.paths.map((p, i) => {
    return (
      <Path
        key={String(i)}
        d={p}
        strokeWidth={5 * strokeWidth}
        stroke={color || currentIcon.attrs?.[i]?.fill}
        fill={color || currentIcon.attrs?.[i]?.fill}
      />
    );
  });

  const svgWidth = width || height || size;
  const svgHeight = height || width || size;
  const viewBoxWidth = viewBoxWidthPercentage
    ? offsetedViewBox * viewBoxWidthPercentage
    : offsetedViewBox;
  const viewBoxHeight = viewBoxHeightPercentage
    ? offsetedViewBox * viewBoxHeightPercentage
    : offsetedViewBox;

  return (
    <Svg
      width={String(svgWidth)}
      height={String(svgHeight)}
      viewBox={`${localOffset} ${localOffset} ${viewBoxWidth} ${viewBoxHeight}`}
    >
      {paths}
    </Svg>
  );
};

export default function Icon({
  name,
  color,
  size = 15,
  strokeWidth,
  offset,
  height,
  width,
  viewBoxWidthPercentage,
  viewBoxHeightPercentage,
  style,
}: IIcon) {
  // const sizeIcon = 15;

  return (
    <TouchableOpacity style={style}>
      <SvgIcon
        iconSet={selection}
        name={name}
        color={color}
        size={size}
        strokeWidth={strokeWidth}
        offset={offset}
        width={width}
        height={height}
        viewBoxWidthPercentage={viewBoxWidthPercentage}
        viewBoxHeightPercentage={viewBoxHeightPercentage}
      />
    </TouchableOpacity>
  );
}
