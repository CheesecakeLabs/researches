import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';
import type { ZooHeroSection as DataType } from '~/lib/types/pages';

interface ZooHeroSectionProps {
  data: DataType;
}

function ZooHeroSection({ data }: ZooHeroSectionProps) {
  return (
    <Flex
      flexDirection="row"
      justify="space-between"
      margin="0 auto"
      overflow="clip"
      backgroundColor="white"
    >
      <Box flex="1">
        <Image
          src={data.background_image.url}
          alt="Descrição da Imagem"
          fit="cover"
          h="100%"
          w="100%"
        />
      </Box>
      <Box
        flex={1}
        p={6}
        backgroundColor="#EFECDA"
        display="flex"
        textColor="black"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          flex={1}
          display="flex"
          marginY={12}
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Box fontSize="2xl">
            <RichTextRenderer data={data.title} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            flex={1}
            alignItems="flex-start"
          >
            <Text>{data.description}</Text>
            <Text>{data.subdescription}</Text>
          </Box>

          <Button
            textColor="white"
            alignSelf="flex-end"
            size="lg"
            rounded="md"
            colorScheme="wine"
          >
            {data.button_cta.title}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default ZooHeroSection;
