import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';

import type { WhatSTheDifference as DataType } from '~/lib/types/pages';
import RichTextRenderer from '../../rich-text-renderer';

interface ItemProps {
  iconSrc?: string;
  name: string;
  description: string;
}

interface WhatSTheDifferenceProps {
  data: DataType;
}

const Item = ({ iconSrc, name, description }: ItemProps) => (
  <Box
    display="flex"
    flexDirection="column"
    width={200}
    alignItems="flex-start"
    justifyContent="flex-start"
  >
    <Box boxSize="50px">
      <Image src={iconSrc} mb="4" alt={name} />
    </Box>
    <Text fontWeight="bold">{name}</Text>
    <Box flex={1}>
      <Text>{description}</Text>
    </Box>
  </Box>
);

function WhatSTheDifference({ data }: WhatSTheDifferenceProps) {
  return (
    <Flex
      direction={['column', 'row']}
      backgroundColor="#1C705E"
      p={10}
      gap={4}
    >
      <VStack align="start" flex="1">
        <Heading>{data.section_title}</Heading>
        <Box maxW={300}>
          <RichTextRenderer data={data.section_description} />
        </Box>
        <Button variant="outline" colorScheme="white" borderRadius="8px">
          {data.button_cta.title}
        </Button>
      </VStack>

      <VStack align="start" flex="2">
        {data.categories.map((group) => (
          <Box py={10} key={group._metadata.uid}>
            <Heading size="md">{group.title}</Heading>
            <HStack align="start" wrap="wrap">
              {group.items.map((item) => (
                <Item
                  iconSrc={item.icon?.url}
                  name={item.title}
                  description={item.description}
                />
              ))}
            </HStack>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}

export default WhatSTheDifference;
