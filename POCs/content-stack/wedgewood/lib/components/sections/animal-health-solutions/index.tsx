import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Text, Heading, Image } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';

import styles from './styles.module.scss';

import type { AnimalHealthSolutions as DataType } from '~/lib/types/pages';

interface AnimalHealthSolutionsProps {
  data: DataType;
}
interface ItemProps {
  iconSrc: string;
  title: string;
  description: string;
  targetUrl: string;
}

const Item = ({ iconSrc, title, description, targetUrl }: ItemProps) => (
  <a href={targetUrl}>
    <Box textAlign="left" mb="4" className={styles.animalPill}>
      <div>
        <Image src={iconSrc} width="60px" mb="4" alt={title} />
        <Heading size="md" mb="2" className={styles.animalPillHeading}>
          {title}
        </Heading>
        <Text mb="4" className={styles.animalPillText}>
          {description}
        </Text>
      </div>
      <div className={styles.animalPillButton}>
        <span>Learn more</span>
        <ArrowForwardIcon color="#1C705E" />
      </div>
    </Box>
  </a>
);

function AnimalHealthSolutions({ data }: AnimalHealthSolutionsProps) {
  return (
    <Box
      flex={1}
      p={12}
      backgroundColor="white"
      color="black"
      className={styles.animalHealthSection}
    >
      <RichTextRenderer data={data.section_title} />
      <Text fontSize="xl" mb="8" className={styles.subtitle}>
        {data.section_description}
      </Text>

      <div className={styles.animalPillHolder}>
        {data.learn_more.map((item, index) => (
          <Item
            key={index}
            description={item.description}
            iconSrc={item.section_image.url}
            title={item.title}
            targetUrl={item.link.href}
          />
        ))}
      </div>
    </Box>
  );
}

export default AnimalHealthSolutions;
