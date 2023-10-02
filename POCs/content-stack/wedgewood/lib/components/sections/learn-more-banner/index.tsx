import { Box, Flex, Button, Image } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';

import styles from './styles.module.scss';

import type { LearnMoreBanner as DataType } from '~/lib/types/pages';

interface LearnMoreBannerProps {
  data: DataType;
}

function LearnMoreBanner({ data }: LearnMoreBannerProps) {
  console.log(data);
  return (
    <Flex flex={1} backgroundColor="white" py={20}>
      <Flex
        flexDirection="row"
        justify="space-between"
        maxW="1200px"
        margin="0 auto"
        borderRadius={16}
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
          backgroundColor={data.background_color.hex}
          p={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          className={styles.learnMoreSection}
        >
          <Box fontSize="2xl" className={styles.title}>
            <RichTextRenderer data={data.section_title} />
          </Box>
          <Box
            display="flex"
            flex={1}
            alignItems="center"
            className={styles.description}
          >
            <RichTextRenderer data={data.section_description} />
          </Box>

          <a href={data.button_cta.href}>
            <Button
              textColor="white"
              alignSelf="flex-end"
              size="md"
              rounded="md"
              colorScheme="whiteAlpha"
              className={styles.ctaButton}
            >
              {data.button_cta.title}
            </Button>
          </a>
        </Box>
      </Flex>
    </Flex>
  );
}

export default LearnMoreBanner;
