import { Box, Flex, Text, Image } from '@chakra-ui/react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';

import styles from './styles.module.scss';

import type { AnimalImage } from '~/lib/types/pages';

interface HeroSectionProps {
  backgroundImage: string;
  rightbackgroundImage: string;
  normalTitle: string;
  boldTitle: string;
  description: string;
  animalImages: AnimalImage[];
  singlePromoImage?: string;
}

function HeroSection({
  animalImages,
  backgroundImage,
  rightbackgroundImage,
  boldTitle,
  description,
  normalTitle,
  singlePromoImage,
}: HeroSectionProps) {
  const imagesPositions = [
    { justifyContent: 'center', alignItems: 'center', marginTop: 32 }, // centro
    { top: 0, left: 0, marginLeft: 40, marginTop: 32 }, // topo-esquerda
    { top: 0, right: 0, marginRight: 12 }, // topo-direita
    { bottom: 0, left: 0 }, // baixo-esquerda
    { bottom: 0, right: 0, marginBottom: 20 }, // baixo-direita
  ];

  return (
    <Box
      flex={1}
      h="80vh"
      position="relative"
      bgImage={backgroundImage}
      bgSize="cover"
      display="flex"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          flex: 1,
          display: 'flex',
          gridTemplateColumns: 'auto auto auto auto auto',
        }}
        globalFactorX={0}
        globalFactorY={0}
        resetOnLeave
      >
        <Flex
          flex={1}
          direction="column"
          justify="center"
          align="flex-start"
          pl={12}
          h="100%"
          className={styles.heroSectionText}
        >
          <Text
            fontWeight="semibold"
            color="gray.700"
            className={styles.normalTitle}
          >
            {normalTitle}
          </Text>
          <Text
            fontWeight="extrabold"
            color="gray.700"
            className={styles.boldTitle}
          >
            {boldTitle}
          </Text>
          <Text
            fontSize="xl"
            color="gray.600"
            mt={4}
            className={styles.description}
          >
            {description}
          </Text>
        </Flex>

        <Flex
          flex={1}
          h="80vh"
          direction={singlePromoImage ? 'row' : 'column'}
          position="relative"
          overflow="hidden"
          justify={singlePromoImage ? 'end' : 'center'}
          align="center"
        >
          {singlePromoImage && (
            <Image src={singlePromoImage} className={styles.heroImage} />
          )}

          {!singlePromoImage && (
            <>
              <MouseParallaxChild
                factorX={0.1}
                factorY={0.1}
                style={{
                  background: `url(${rightbackgroundImage})`,
                  position: 'absolute',
                  right: 0,
                  backgroundPositionY: '50%',
                  zIndex: 0,
                  transform: 'translateX(30%)',
                  backgroundSize: 'auto',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                }}
              />
              <Box
                zIndex={12}
                position="relative"
                width="400px"
                height="400px"
                marginLeft={28}
                mt={12}
                alignItems="center"
                justifyContent="center"
                display="flex"
              >
                {animalImages?.map((animal, index) => (
                  <MouseParallaxChild
                    key={animal._metadata.uid}
                    factorX={0.2}
                    factorY={0.2}
                    style={{
                      zIndex: 10,
                      width: '90px',
                      height: '90px',
                      position: index === 0 ? 'relative' : 'absolute',
                      ...imagesPositions[index],
                    }}
                  >
                    <Image
                      src={animal.animal_image.url}
                      backgroundColor={animal.background_color.hex}
                      borderRadius="full"
                      zIndex={11}
                      w="100%"
                      h="100%"
                      alt={`Imagem ${index + 1}`}
                    />
                  </MouseParallaxChild>
                ))}
              </Box>
            </>
          )}
        </Flex>
      </MouseParallaxContainer>
    </Box>
  );
}

export default HeroSection;
