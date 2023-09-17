import { Box, Button, Center, Image, Text } from '@chakra-ui/react';

import type { WildGrowth as DataType } from '~/lib/types/pages';

import styles from './styles.module.scss';
import RichTextRenderer from '../../rich-text-renderer';

interface WildGrowthProps {
  data: DataType;
}
interface HexagonImageMosaicProps {
  spacing: number;
  images: {
    url: string;
    backgroundColor: string;
  }[];
}

const HexagonImageMosaic = ({
  images,
  spacing = 120,
}: HexagonImageMosaicProps) => {
  const getHexagonPoints = (radius: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = ((2 * Math.PI) / 6) * i;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      points.push({ x, y });
    }
    return points;
  };

  const innerPoints = getHexagonPoints(spacing);
  const outerPoints = getHexagonPoints(spacing * 2);

  const points = [{ x: 0, y: 0 }, ...innerPoints, ...outerPoints];

  return (
    <Center h="600px" w="600px" position="relative">
      {images.map((image, index) => {
        const coords = points[index];

        return (
          <Box
            key={index}
            position="absolute"
            top="50%"
            backgroundColor={image.backgroundColor}
            left="50%"
            w="80px"
            h="80px"
            transform={`translate(${coords.x}px, ${coords.y}px)`}
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src={image.url}
              alt={`Hexagon Image ${index}`}
              objectFit="cover"
            />
          </Box>
        );
      })}
    </Center>
  );
};

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
        <RichTextRenderer data={data.section_title}/>

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
      <Image src={data.promoimage.url} alt="Wild Growth" className={styles.promoImage} />
    </Box>
  );
}

export default WildGrowth;
