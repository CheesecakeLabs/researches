import { Box, Flex, Text, Link } from '@chakra-ui/react';
import type { FC } from 'react';

import RichTextRenderer from '../rich-text-renderer';

import styles from './styles.module.scss';

import type { FooterProps as DataType } from '~/lib/types/layout';

interface FooterProps {
  data: DataType;
}

const RemoveHTMLTags: FC<{ htmlString: string }> = ({ htmlString }) => {
  const extractText = (html: string): string => {
    const dom = new DOMParser().parseFromString(html, 'text/html');
    return dom.body.textContent || '';
  };

  return <div>{extractText(htmlString)}</div>;
};

function Footer({ data }: FooterProps) {
  return (
    <Box
      as="footer"
      background="#532F45"
      color="white"
      padding={10}
      className={styles.footer}
    >
      <Flex
        direction={['column', 'row']}
        justify="space-between"
        alignItems="center"
        margin="0 auto"
        marginBottom={8}
      >
        <Flex gap={8} direction={['column', 'row']}>
          {data.navigation.link.map((link) => (
            <Link href={link.href}>{link.title?.toUpperCase()}</Link>
          ))}
        </Flex>

        <Box mt={[4, 0]}>
          <RemoveHTMLTags htmlString={data.copyright} />

          {/* @ts-ignore */}
          <RichTextRenderer data={data.company_address} />
        </Box>
      </Flex>

      <Text mt={4}>
        {/* @ts-ignore */}
        <RichTextRenderer data={data.footer_text} />
      </Text>
    </Box>
  );
}

export default Footer;
