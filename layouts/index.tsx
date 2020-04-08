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
      <React.Fragment>
        <TitleAndMetaTags title={frontMatter.title} />

        <Container px={[3, 6]} py={7}>
          <NextLink href="/" passHref>
            <Link variant="ghost" sx={{ position: 'absolute', top: 4 }}>
              ↞ ped.ro
            </Link>
          </NextLink>

          <Text as="h1" size={5} weight="bold">
            {frontMatter.title}
          </Text>

          <Text as="time" mt={1} mx="auto" size={2} sx={{ fontFamily: 'mono', color: 'gray' }}>
            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')} — {frontMatter.readingTime.text}
          </Text>

          <Box my={5}>{children}</Box>

          <Divider my={5} mx="auto" sx={{ width: 3, bg: 'gray' }} />

          <Box sx={{ textAlign: 'center' }}>
            <Text as="p" mt={4} mx="auto" size={2}>
              Share this post on{' '}
              <Link href={twitterShare} target="_blank" title="Share this post on Twitter" variant="twitter">
                Twitter
              </Link>
            </Text>
          </Box>
        </Container>
      </React.Fragment>
    );
  };
};
