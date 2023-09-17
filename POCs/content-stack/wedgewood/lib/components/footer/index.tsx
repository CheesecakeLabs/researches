import { Box, Flex, Text, Link } from '@chakra-ui/react';

import styles from './styles.module.scss';

interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <Box as="footer" background="#532F45" color="white" padding={10} className={styles.footer}>
      <Flex
        direction={['column', 'row']}
        justify="space-between"
        alignItems="center"
        margin="0 auto"
        marginBottom={8}
      >
        <Flex gap={8} direction={['column', 'row']}>
          <Link href="/terms">TERMS OF USE</Link>
          <Link href="/privacy">PRIVACY POLICY</Link>
          <Link href="/site-map">SITE MAP</Link>
        </Flex>

        <Box mt={[4, 0]}>
          <Text>©️ 2004-2023 Wedgewood Pharmacy, all rights reserved.</Text>
          <Text>405 heron drive suite 200 | Swedesboro, NJ 08085-1749</Text>
        </Box>
      </Flex>

      <Text mt={4}>
        This content is intended for counseling purposes only. This content is
        informational/educational and is not intended to treat or diagnose any
        disease or patient. No claims are made as to the safety or efficacy of
        mentioned preparations. The compounded medications featured in this
        content have been prescribed and/or administered by prescribers who work
        with Wedgewood Pharmacy. You are encouraged to speak with your
        prescriber as to the appropriate use of any medication. Wedgewood
        Pharmacy’s compounded veterinary preparations are not intended for use
        in food and food-producing animals. All product and company names are
        trademarks™ or registered® trademarks of their respective holders. Use
        of them does not imply any affiliation with or endorsement by them.
      </Text>
    </Box>
  );
}

export default Footer;
