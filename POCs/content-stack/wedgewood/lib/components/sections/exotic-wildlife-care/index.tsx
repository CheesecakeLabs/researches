import { Box, HStack, Icon, Text } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';
import type { Check, ExoticWildlifeCare as DataType } from '~/lib/types/pages';

import styles from './styles.module.scss';
import { CheckIcon } from '@chakra-ui/icons';

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
    w="30%"
    gap={4}
    className={styles.item}
  >
    <CheckIcon className={styles.icon}/>
    <Text>{data.name}</Text>
  </Box>
);

function ExoticWildlifeCare({ data }: ExoticWildlifeCareProps) {
  return (
    <Box backgroundColor="white" textColor="black" p={12} className={styles.wildlife}>
      <Box className={styles.sectionTitle}>
        <RichTextRenderer data={data.title} />
      </Box>
      <Box className={styles.sectionDescription}>
        <RichTextRenderer data={data.description} />
      </Box>

      <HStack flex={1} align="start" wrap="wrap" className={styles.itemHolder}>
        {data.checks.map((check) => (
          <Item data={check} />
        ))}
      </HStack>
    </Box>
  );
}

export default ExoticWildlifeCare;
