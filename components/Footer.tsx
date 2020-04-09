import React from 'react';
import NextLink from 'next/link';
import { Link, Text, Box, Badge, Tooltip, Container, Flex } from '@peduarte/wallop-system';

export const Footer = () => {
  return (
    <Box py={[4, 5]} sx={{ bg: 'white', color: 'black' }}>
      <Container mx={[4, 5, 6]} py={[4, 5]}>
        <Flex sx={{ flexDirection: ['column', 'row'] }}>
          <Text
            as="h3"
            size={2}
            weight="medium"
            mr={[0, 4]}
            mb={[4, 0]}
            sx={{ textTransform: 'uppercase', color: 'gray' }}
          >
            PD
          </Text>

          <Text as="p" size={2} weight="medium" mx={[0, 4]} mb={[1, 0]}>
            <NextLink href="/blog" passHref>
              <Link>Blog</Link>
            </NextLink>
          </Text>

          <Text as="p" size={2} weight="medium" mx={[0, 4]} mb={[1, 0]}>
            <Link href="/blog/feed">RSS</Link>
          </Text>

          <Text as="p" size={2} weight="medium" mx={[0, 4]} mb={[1, 0]}>
            <Link href="https://github.com/peduarte" target="_blank">
              Github
            </Link>
          </Text>

          <Text as="p" size={2} weight="medium" mx={[0, 4]} mb={[1, 0]}>
            <Link href="https://twitter.com/peduarte" target="_blank">
              Twitter
            </Link>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
