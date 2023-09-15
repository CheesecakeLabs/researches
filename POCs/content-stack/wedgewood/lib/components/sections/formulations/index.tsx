import { Box, Flex, Image, Text } from '@chakra-ui/react';

import type { Formulations as DataType, Formulation } from '~/lib/types/pages';
import RichTextRenderer from '../../rich-text-renderer';

interface FormulationsProps {
  data: DataType;
}
interface FormulationItemProps {
  data: Formulation;
}

function FormulationItem({ data }: FormulationItemProps) {
  return (
    <Box
      mb={4}
      flexShrink={0}
      backgroundColor="white"
      width="206px"
      height="199px"
      p={6}
      borderRadius="24px"
    >
      <Image boxSize="80px" mb={4} src={data.image.url} />
      <Text>{data.name}</Text>
    </Box>
  );
}

function Formulations({ data }: FormulationsProps) {
  return (
    <Box
      flex={1}
      textColor="black"
      flexDirection="column"
      py={24}
      position="relative"
      // bgImage={data.background_image.url}
      backgroundColor="#EFECDA"
      bgSize="auto"
      display="flex"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box mb={8} px={10} color="#000" fontSize="32px">
        <RichTextRenderer data={data.title} />
      </Box>
      <Flex
        w="full"
        gap={6}
        px={10}
        overflowX="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#4b2a3e',
            borderRadius: '2px',
          },
        }}
      >
        {data.formulations.map((formulation) => (
          <FormulationItem data={formulation} />
        ))}
      </Flex>
    </Box>
  );
}

export default Formulations;
