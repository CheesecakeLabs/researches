import { Box, HStack, Icon, Text } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';
import type { Check, ExoticWildlifeCare as DataType } from '~/lib/types/pages';

interface ExoticWildlifeCareProps {
  data: DataType;
}

interface CheckProps {
  data: Check;
}

const Item = ({ data }: CheckProps) => (
  <Box
    borderColor="gray.200"
    py={4}
    display="flex"
    borderRadius="md"
    flexDirection="row"
    alignItems="center"
    w="33%"
    gap={4}
  >
    <Icon name="check" />
    <Text>{data.name}</Text>
  </Box>
);

function ExoticWildlifeCare({ data }: ExoticWildlifeCareProps) {
  return (
    <Box backgroundColor="white" textColor="black" p={8}>
      <Box fontSize="3xl">
        <RichTextRenderer data={data.title} />
      </Box>
      <Box maxW="1400px">
        <RichTextRenderer data={data.description} />
      </Box>

      <HStack flex={1} align="start" wrap="wrap">
        {data.checks.map((check) => (
          <Item data={check} />
        ))}
      </HStack>
    </Box>
  );
}

export default ExoticWildlifeCare;
