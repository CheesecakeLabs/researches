import {
  Box,
  Icon,
  Text,
  Heading,
  Button,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';
import type { AnimalHealthSolutions as DataType } from '~/lib/types/pages';

interface AnimalHealthSolutionsProps {
  data: DataType;
}

const Item = ({ iconSrc, title, description }) => (
  <Box textAlign="left" mb="4">
    <Image src={iconSrc} boxSize="30px" mb="4" alt={title} />
    <Heading size="md" mb="2">
      {title}
    </Heading>
    <Text mb="4">{description}</Text>
    <Button
      rightIcon={<Icon name="arrow" />}
      variant="outline"
      colorScheme="blue"
    >
      Learn more
    </Button>
  </Box>
);

function AnimalHealthSolutions({ data }: AnimalHealthSolutionsProps) {
  return (
    <Box flex={1} p={12} backgroundColor="white" color="black">
      <RichTextRenderer data={data.section_title} />
      <Text fontSize="xl" mb="8">
        {data.section_description}
      </Text>

      <SimpleGrid columns={4} spacing={10}>
        {data.learn_more.map((item, index) => (
          <Item
            key={index}
            description={item.description}
            iconSrc={item.section_image.url}
            title={item.title}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default AnimalHealthSolutions;
