import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex, Link, Input, Image, Text } from '@chakra-ui/react';
import type { FC } from 'react';

import styles from './styles.module.scss';

import type { HeaderProps as DataType } from '~/lib/types/layout';

interface HeaderProps {
  data: DataType;
}

const RemoveHTMLTags: FC<{ htmlString: string }> = ({ htmlString }) => {
  const extractText = (html: string): string => {
    const dom = new DOMParser().parseFromString(html, 'text/html');
    return dom.body.textContent || '';
  };

  return <div>{extractText(htmlString)}</div>;
};

function Header({ data }: HeaderProps) {
  return (
    <Box as="header" bg="#FCFBF8" color="black" className={styles.header}>
      <Flex
        align="center"
        justify="space-between"
        p={4}
        // margin="0 auto"
      >
        <Box display="flex" flexDirection="row">
          {/* Logo */}
          <a href="/home">
            <Image
              // src="https://images.contentstack.io/v3/assets/bltd4005ac76e5ffae8/blt03b691661b3dfb2b/64f8d8a50433c07d78251fa1/LOGO.svg"
              src={data.logo.url}
              alt="Company Logo"
              w="150px"
            />
          </a>

          {/* Search Bar */}
          <Input
            width="400px"
            ml={5}
            borderColor="gray"
            placeholder={data.search_bar_placeholder}
            _placeholder={{ color: 'gray.500' }}
            variant="outline"
            bg="white"
            color="black"
            className={styles.searchBar}
          />
        </Box>

        {/* Navigation Links */}
        <Flex align="center">
          {data.navigation_menu.map((menu) => (
            <Link mx={3}>
              {menu.label}
              <ChevronDownIcon className={styles.linkIcon} />
            </Link>
          ))}
        </Flex>
      </Flex>
      {data.notification_bar.show_announcement && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="#1C705E"
          className={styles.headerBanner}
        >
          <Text color="white">
            <RemoveHTMLTags
              htmlString={data.notification_bar.announcement_text}
            />
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default Header;
