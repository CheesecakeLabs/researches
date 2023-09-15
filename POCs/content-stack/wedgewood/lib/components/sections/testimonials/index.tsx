import { Box, Image, Text, VStack, Flex } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';
import type { Testimonials as DataType, Testimony } from '~/lib/types/pages';

interface TestimonialsProps {
  data: DataType;
}

interface TestimonialCardProps {
  authorImage: string;
  authorName: string;
  authorDescription: string;
  location: string;
  testimony: Testimony;
}

const TestimonialCard = ({
  authorDescription,
  authorImage,
  authorName,
  testimony,
  location,
}: TestimonialCardProps) => {
  // console.log('testimony', testimony);
  return (
    <Box
      as="article"
      w="515px"
      h="460px"
      boxShadow="lg"
      bgColor="#F3F4F4"
      p={5}
      mb={6}
      borderRadius="md"
      flexShrink={0}
    >
      <Flex flexDirection="column">
        <Flex>
          <Image
            boxSize="60px"
            borderRadius="full"
            src={authorImage}
            alt={authorName}
          />
          <VStack alignItems="start" spacing="1">
            <Text fontWeight="bold">{authorName}</Text>
            <Text fontSize="sm">{authorDescription}</Text>
          </VStack>
        </Flex>

        <Flex flex={1} flexDir="column">
          <RichTextRenderer data={testimony} />
        </Flex>

        <Flex justifyContent="space-between" alignItems="center">
          <Image src="/quote.svg" w="27px" h="24px" alt="Quote" />
          <Text fontSize="sm">{location}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

function Testimonials({ data }: TestimonialsProps) {
  return (
    <Box backgroundColor="white" textColor="blackAlpha.800">
      <VStack align="start">
        <Box px={10}>
          <RichTextRenderer data={data.section_title} />
          <Text textAlign="left">{data.section_description}</Text>
        </Box>
        <Flex
          w="full"
          gap={6}
          px={10}
          overflowX="auto"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
              height: '10px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#4b2a3e',
              borderRadius: '4px',
            },
          }}
        >
          {[...data.testimonial_card, ...data.testimonial_card].map(
            (testimonial, idx) => (
              <TestimonialCard
                key={idx}
                authorDescription={testimonial.author_description}
                authorImage={testimonial.author_photo.url}
                authorName={testimonial.author_name}
                location={testimonial.location}
                testimony={testimonial.testimony}
              />
            )
          )}
        </Flex>
      </VStack>
    </Box>
  );
}

export default Testimonials;
