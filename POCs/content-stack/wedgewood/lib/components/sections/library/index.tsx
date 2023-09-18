import { Box, Flex, Icon, Image, Link, Text } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';
import type { Library as DataType, LearnMoreCard } from '~/lib/types/pages';

import styles from './styles.module.scss';
import { ArrowForwardIcon } from '@chakra-ui/icons';

interface LibraryProps {
  data: DataType;
}
interface LearnMoreCardProps {
  data: LearnMoreCard;
}

const Card = ({ data }: LearnMoreCardProps) => (
  <div className={styles.libraryItem}>
    <Image src={data.image.url}  className={styles.libraryImage}/>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      w="100%"
      px={10}
      py={5}
      className={styles.libraryContent}
    >
      <Text fontSize="24px" lineHeight="150%" className={styles.libraryText}>
        {data.title}
      </Text>
      <div
        className={styles.animalPillButton}
      >
        <Text>{data.button_cta.title}</Text>
        <ArrowForwardIcon />
      </div>
    </Box>
  </div>
);

function Library({ data }: LibraryProps) {
  return (
    <Box backgroundColor="white" textColor="#000" p={12} className={styles.librarySection}>
      <Box className={styles.sectionTitle}>
        <RichTextRenderer data={data.title} />
      </Box>

      <RichTextRenderer data={data.description} />

      <Flex direction="row" justify="space-between" className={styles.holder}>
        {data.learn_more_cards.map((card) => (
          <Card data={card} />
        ))}
      </Flex>
    </Box>
  );
}

export default Library;
