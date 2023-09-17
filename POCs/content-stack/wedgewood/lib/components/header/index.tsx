import { Box, Flex, Link, Input, Image, Text } from '@chakra-ui/react';

import styles from './styles.module.scss';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <Box as="header" bg="#FCFBF8" color="black"  className={styles.header}>
      <Flex
        align="center"
        justify="space-between"
        p={4}
        // margin="0 auto"
      >
        <Box display="flex" flexDirection="row">
          {/* Logo */}
          <a href='/home'>
            <Image
              src="https://images.contentstack.io/v3/assets/bltd4005ac76e5ffae8/blt03b691661b3dfb2b/64f8d8a50433c07d78251fa1/LOGO.svg"
              alt="Company Logo"
              w="150px"
            />
          </a>

          {/* Search Bar */}
          <Input
            width="400px"
            ml={5}
            borderColor="gray"
            placeholder="Search..."
            _placeholder={{ color: 'gray.500' }}
            variant="outline"
            bg="white"
            color="black"
            className={styles.searchBar}
          />
        </Box>

        {/* Navigation Links */}
        <Flex align="center">
          <Link mx={3} href="#">
            Veterinary Practices
            <ChevronDownIcon className={styles.linkIcon}/>
          </Link>
          <Link mx={3} href="#">
            Pet and Horse Owners
            <ChevronDownIcon className={styles.linkIcon}/>
          </Link>
          <Link mx={3} href="#">
            Medications
            <ChevronDownIcon className={styles.linkIcon}/>
          </Link>
        </Flex>
      </Flex>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#1C705E"
        className={styles.headerBanner}
      >
        <Text color="white">Wedgewood has merged with Blue Rabbit</Text>
      </Box>
    </Box>
  );
}

export default Header;
