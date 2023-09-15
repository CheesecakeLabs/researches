import { Box, Button, Center, Image, Text } from '@chakra-ui/react';

import type { WildGrowth as DataType } from '~/lib/types/pages';

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
    >
      {/* Lado Esquerdo - Título, Descrição e CTA */}
      <Box flex="1" paddingRight={[0, 6]} marginBottom={[6, 0]}>
        <Text fontSize="2xl" fontWeight="bold" marginBottom={4}>
          Wild Growth
        </Text>

        <Text marginBottom={6}>
          In 2020, the Wedgewood family grew a bit larger, and a whole lot
          wilder, with the acquisition of Wildlife Pharmaceuticals and its
          renowned subsidiary, ZooPharm. We're absolutely thrilled to continue
          serving the unique needs of the wildlife and zoo communities here at
          Wedgewood Pharmacy and Wedgewood Connect. Wedgwood is proud to offer
          the remarkable and specialized products that wildlife, aquarium, and
          zoo animal caretakers depend on, like the BAM™ Kit and our patented
          extended-release buprenorphine. These unique medications exemplify our
          dedication to providing care for our planet's most wondrous creatures.
          Discover the full list of ZooPharm medications now available at
          Wedgewood:
        </Text>

        <Button
          variant="solid"
          borderRadius={8}
          color="white"
          colorScheme="wine"
        >
          Discover Our Medications
        </Button>
      </Box>
      <HexagonImageMosaic
        images={[
          ...data.mosaic_pictures,
          ...data.mosaic_pictures,
          ...data.mosaic_pictures,
          ...data.mosaic_pictures,
          data.mosaic_pictures[0],
        ].map((el) => ({
          url: el.image.url,
          backgroundColor: el.background_color.hex,
        }))}
      />
    </Box>
  );
}

export default WildGrowth;
