import { Box, Flex, Link, Input, Image, Text } from '@chakra-ui/react';

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <Box as="header" bg="#FCFBF8" color="black">
      <Flex
        align="center"
        justify="space-between"
        p={4}
        maxW="1600px"
        // margin="0 auto"
      >
        <Box display="flex" flexDirection="row">
          {/* Logo */}
          <Image
            src="https://images.contentstack.io/v3/assets/bltd4005ac76e5ffae8/blt03b691661b3dfb2b/64f8d8a50433c07d78251fa1/LOGO.svg"
            alt="Company Logo"
            w="150px"
          />

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
          />
        </Box>

        {/* Navigation Links */}
        <Flex align="center">
          <Link mx={3} href="#">
            Veterinary Practices
          </Link>
          <Link mx={3} href="#">
            Pet & Horse Owners
          </Link>
          <Link mx={3} href="#">
            Medications
          </Link>
        </Flex>
      </Flex>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#1C705E"
      >
        <Text color="white">Wedgewood has merged with Blue Rabbit</Text>
      </Box>
    </Box>
  );
}

export default Header;
