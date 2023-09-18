import { Box, Button, Center, Text } from '@chakra-ui/react';

import styles from './styles.module.scss';

import RichTextRenderer from '../../rich-text-renderer';
import type { LoginSection as DataType } from '~/lib/types/pages';

interface LoginSectionProps {
  data: DataType;
}

function LoginSection({ data }: LoginSectionProps) {
  return (
    <Box
      h="320px"
      w="100%"
      textColor="blackAlpha.800"
      bgImage={`url("${data.background_image.url}")`}
      position="relative"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Center h="100%">
        <Box textAlign="center" className={styles.loginSection}>
          <RichTextRenderer data={data.title} />
          <Text fontSize="xl" mb="8" {...data.$.description} className={styles.loginSectionDescription}>
            {data.description}
          </Text>
          <a href={data.external_link.href}>
            <Button
              borderRadius={4}
              colorScheme="wine"
              textColor="white"
              variant="solid"
              className={styles.loginSectionButton}
            >
              {data.external_link.title}
            </Button>
          </a>  
        </Box>
      </Center>
    </Box>
  );
}

export default LoginSection;
