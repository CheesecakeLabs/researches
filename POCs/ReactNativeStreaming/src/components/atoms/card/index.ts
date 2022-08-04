import styled from '@emotion/native';
import Box, { BoxProps } from 'components/atoms/box';
import React from 'react';
import { Radius } from 'styles/themes/radius';
import { ShadowOptions } from 'styles/themes/shadows';
import { Spaces } from 'styles/themes/spaces';

type CardProps = BoxProps & {
  children: React.ReactNode;
  shadow?: ShadowOptions;
};

const Card = styled(Box)<CardProps>(
  props => ({
    backgroundColor: props.theme.colors.background.light,
    borderRadius: Radius.sm,
    paddingHorizontal: Spaces.sm,
    paddingVertical: Spaces.xs,
  }),
  props => ({ ...props.theme.shadow[props.shadow ?? ShadowOptions.none] }),
);

export default Card;
