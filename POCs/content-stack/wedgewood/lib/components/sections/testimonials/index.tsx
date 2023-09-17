import { Box, Image, Text, VStack, Flex } from '@chakra-ui/react';

import styles from './styles.module.scss';

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
      w="540px"
      h="520px"
      boxShadow="lg"
      bgColor="#F3F4F4"
      p={5}
      mb={6}
      borderRadius="md"
      flexShrink={0}
      className={styles.testimonialCard}
    >
      <div>
        <div className={styles.testimonialCardHeader}>
          <Image
            boxSize="60px"
            borderRadius="full"
            src={authorImage}
            alt={authorName}
            className={styles.testimonialCardImage}
          />
          <VStack alignItems="start" spacing="1" className={styles.testimonialCardTitleHolder}>
            <Text fontWeight="bold" className={styles.testimonialCardTitleName}>{authorName}</Text>
            <Text fontSize="sm" className={styles.testimonialCardTitleDesc}>{authorDescription}</Text>
          </VStack>

          </div>
          <RichTextRenderer data={testimony} />
      </div>

        <div className={styles.testimonialCardFooter}>
          <Image src="/quote.svg" w="27px" h="24px" alt="Quote" />
          <Text fontSize="sm" className={styles.testimonialCardFooterText}>{location}</Text>
        </div>
    </Box>
  );
};

function Testimonials({ data }: TestimonialsProps) {
  return (
    <Box backgroundColor="white" textColor="blackAlpha.800" className={styles.testimonialsSection}>
      <VStack align="start">
        <Box px={10} className={styles.testimonialsSectionTitle}>
          <RichTextRenderer data={data.section_title} />
          <Text textAlign="left"  className={styles.testimonialsSectionDescription}>{data.section_description}</Text>
        </Box>
        <Flex
          w="full"
          gap={6}
          px={10}
          overflowX="auto"
          className={styles.testimonialsSectionHolder}
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
