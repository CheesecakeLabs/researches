import Typography, { TypographyProps } from 'components/atoms/typography';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

type LinkProps = TypographyProps & {
  children: React.ReactNode;
  onPress: () => void;
};

const Link = ({
  children,
  onPress,
  ...rest
}: LinkProps): React.ReactElement => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Typography underline color="primary.neutral" {...rest}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

export default Link;
