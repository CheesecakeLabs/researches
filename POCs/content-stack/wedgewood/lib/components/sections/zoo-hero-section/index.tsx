import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';
import type { ZooHeroSection as DataType } from '~/lib/types/pages';

import styles from './styles.module.scss';

interface ZooHeroSectionProps {
  data: DataType;
}

function ZooHeroSection({ data }: ZooHeroSectionProps) {
  console.log(data);
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
        className={styles.heroContent}
      >          
        <RichTextRenderer data={data.title} />

        <Text className={styles.contentDesc}>{data.description}</Text>
        <Text className={styles.contentSub}>{data.subdescription}</Text>

        <a href={data.button_cta.href}>
          <Button
            textColor="white"
            alignSelf="flex-end"
            size="lg"
            rounded="md"
            colorScheme="wine"
            className={styles.ctaButton}
          >
            {data.button_cta.title}
          </Button>
        </a>
      </Box>
    </Flex>
  );
}

export default ZooHeroSection;
