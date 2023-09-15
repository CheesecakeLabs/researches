import { Box, Flex, Icon, Image, Link, Text } from '@chakra-ui/react';

import RichTextRenderer from '../../rich-text-renderer';
import type { Library as DataType, LearnMoreCard } from '~/lib/types/pages';

interface LibraryProps {
  data: DataType;
}
interface LearnMoreCardProps {
  data: LearnMoreCard;
}

const Card = ({ data }: LearnMoreCardProps) => (
  <Flex flex={1} my={16}>
    <Image src={data.image.url} alt="teste" w="280px" h="232px" mb={4} />
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      w="40%"
      px={10}
      py={5}
    >
      <Text fontSize="24px" fontWeight={400} lineHeight="150%">
        {data.title}
      </Text>
      <Link
        flexDirection="row"
        alignItems="center"
        gap={4}
        display="flex"
        href={data.button_cta.href}
      >
        <Text>{data.button_cta.title}</Text>
        <Icon name="arrow" />
      </Link>
    </Box>
  </Flex>
);

function Library({ data }: LibraryProps) {
  return (
    <Box backgroundColor="white" textColor="#000" p={10}>
      <Box fontSize="32px">
        <RichTextRenderer data={data.title} />
      </Box>
      <RichTextRenderer data={data.description} />

      <Flex direction="row" justify="center">
        {data.learn_more_cards.map((card) => (
          <Card data={card} />
        ))}
      </Flex>
    </Box>
  );
}

export default Library;
