import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';
import { Container, Text, Box, Link, Divider } from '@peduarte/wallop-system';
import { FrontMatter } from '../types';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

export default (frontMatter: FrontMatter) => {
  return ({ children }) => {
    const router = useRouter();

    const twitterShare = `
		https://twitter.com/intent/tweet?
		text="${frontMatter.title}" by @peduarte
		&url=https://modulz.app${router.route}
		`;

    return (
      <Box sx={{ bg: 'black', color: 'white' }}>
        <TitleAndMetaTags title={frontMatter.title} />

        <Container mx={[4, 5, 6]} py={[4, 5]}>
          <Box mb={[5, 6]}>
            <NextLink href="/" passHref>
              <Link variant="ghost">
                <Text size={2} sx={{ textTransform: 'uppercase' }}>
                  Back <Text sx={{ color: 'gray' }}>home</Text>
                </Text>
              </Link>
            </NextLink>
          </Box>

          <Text as="h1" size={5} weight="medium">
            {frontMatter.title}
          </Text>

          <Text as="time" mt={1} mx="auto" size={2} sx={{ fontFamily: 'mono', color: 'gray' }}>
            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')} — {frontMatter.readingTime.text}
          </Text>

          <Box my={5}>{children}</Box>

          <Divider my={5} mx="auto" size="small" />

          <Box sx={{ textAlign: 'center' }}>
            <Text as="p" mt={4} mx="auto" size={2}>
              Share this post on{' '}
              <Link href={twitterShare} target="_blank" title="Share this post on Twitter" variant="twitter">
                Twitter
              </Link>
            </Text>
          </Box>
        </Container>
      </Box>
    );
  };
};
