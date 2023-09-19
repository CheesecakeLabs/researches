import { Box, Button, Image, Text } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';

import styles from './styles.module.scss';

import type { WildGrowth as DataType } from '~/lib/types/pages';

interface WildGrowthProps {
  data: DataType;
}

function WildGrowth({ data }: WildGrowthProps) {
  return (
    <Box
      p={12}
      backgroundColor="white"
      textColor="blackAlpha.800"
      display="flex"
      alignItems="center"
      flex={1}
      className={styles.wildSection}
    >
      {/* Lado Esquerdo - Título, Descrição e CTA */}
      <Box flex="1" paddingRight={[0, 6]} marginBottom={[6, 0]}>
        <RichTextRenderer data={data.section_title} />

        <Text marginBottom={6} className={styles.firstParagraph}>
          {data.first_paragraph}
        </Text>

        <Text marginBottom={6} className={styles.secondParagraph}>
          {data.second_paragraph}
        </Text>

        <a href={data.link.href}>
          <Button
            variant="solid"
            borderRadius={8}
            color="white"
            colorScheme="wine"
            className={styles.ctaButton}
          >
            {data.link.title}
          </Button>
        </a>
      </Box>
      <Image
        src={data.promoimage.url}
        alt="Wild Growth"
        className={styles.promoImage}
      />
    </Box>
  );
}

export default WildGrowth;
