import { Box, Button, Center, Text } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';
import type { LoginSection as DataType } from '~/lib/types/pages';

interface LoginSectionProps {
  data: DataType;
}

function LoginSection({ data }: LoginSectionProps) {
  return (
    <Box
      h="400px"
      w="100%"
      textColor="blackAlpha.800"
      bgImage={`url("${data.background_image.url}")`}
      position="relative"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Center h="100%">
        <Box textAlign="center">
          <RichTextRenderer data={data.title} />
          <Text fontSize="xl" mb="8" {...data.$.description}>
            {data.description}
          </Text>
          <Button
            borderRadius={4}
            colorScheme="wine"
            textColor="white"
            variant="solid"
          >
            Log In As Practice
          </Button>
        </Box>
      </Center>
    </Box>
  );
}

export default LoginSection;
