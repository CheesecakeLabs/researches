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

import styles from './styles.module.scss';

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
    alignItems="flex-start"
    justifyContent="flex-start"
    className={styles.pill}
  >
    <Box boxSize="50px">
      <Image src={iconSrc} mb="4" alt={name} />
    </Box>
    <Text fontWeight="bold" className={styles.farmTitle}>{name}</Text>
    <Box flex={1}>
      <Text className={styles.farmDesc}>{description}</Text>
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
      className={styles.differenceSection}
    >
      <VStack align="start" flex="1" className={styles.leftSection}>
        <div className={styles.title}>{data.section_title}</div>
        <Box maxW={300}>
          <RichTextRenderer data={data.section_description} />
        </Box>
        <Button variant="outline" colorScheme="white" borderRadius="8px" className={styles.ctaButton}>
          {data.button_cta.title}
        </Button>
      </VStack>

      <VStack align="start" flex="2" className={styles.rightSection}>
        {data.categories.map((group) => (
          <Box key={group._metadata.uid}>
            <Heading size="md" className={styles.sectionTitle}>{group.title}</Heading>
            <div className={styles.row}>
              {group.items.map((item) => (
                <Item
                  iconSrc={item.icon?.url}
                  name={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}

export default WhatSTheDifference;
