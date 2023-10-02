import { Box, Image, Text } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';

import styles from './styles.module.scss';

import type { Formulations as DataType, Formulation } from '~/lib/types/pages';

interface FormulationsProps {
  data: DataType;
}
interface FormulationItemProps {
  data: Formulation;
}

function FormulationItem({ data }: FormulationItemProps) {
  return (
    <Box
      mb={4}
      flexShrink={0}
      backgroundColor="white"
      width="206px"
      height="206px"
      p={6}
      borderRadius="24px"
      className={styles.formulationItem}
    >
      <Image boxSize="80px" mb={4} src={data.image.url} />
      <Text className={styles.formulationItemText}>{data.name}</Text>
    </Box>
  );
}

function Formulations({ data }: FormulationsProps) {
  return (
    <Box
      flex={1}
      textColor="black"
      flexDirection="column"
      py={24}
      position="relative"
      bgImage={data.background_image.url}
      backgroundColor="#EFECDA"
      bgSize="auto"
      display="flex"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box mb={8} px={12} color="#000" fontSize="32px">
        <RichTextRenderer data={data.title} />
      </Box>
      <div className={styles.formulationHolder}>
        {data.formulations.map((formulation) => (
          <FormulationItem data={formulation} />
        ))}
      </div>
    </Box>
  );
}

export default Formulations;
