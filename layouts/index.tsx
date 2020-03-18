import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';
import { Container, Text, Box, Link, Divider } from '@modulz/primitives';
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

        <Container px={[2, 3]} py={6} sx={{ maxWidth: 720 }}>
          <NextLink href="/" passHref>
            <Link sx={{ position: 'absolute', top: 3, lineHeight: 2, ':hover': { color: 'red' } }}>↞ ped.ro</Link>
          </NextLink>

          <Text
            as="h1"
            sx={{
              fontFamily: 'normal',
              fontSize: [3, 4],
              lineHeight: [3, 4],
              fontWeight: 600,
            }}
          >
            {frontMatter.title}
          </Text>

          <Text
            mt={[1, 2]}
            mx="auto"
            sx={{
              display: 'block',
              fontFamily: 'normal',
              fontSize: 0,
              fontWeight: 400,
              color: 'gray',
            }}
          >
            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')} — {frontMatter.readingTime.text}
          </Text>

          <Box my={4}>{children}</Box>

          <Divider my={4} mx="auto" sx={{ width: 3, bg: 'gray' }} />

          <Box sx={{ textAlign: 'center' }}>
            <Text
              as="p"
              mt={3}
              mx="auto"
              sx={{
                fontFamily: 'normal',
                fontSize: 1,
                fontWeight: 400,
                lineHeight: 2,
              }}
            >
              Share this post on{' '}
              <Link
                href={twitterShare}
                target="_blank"
                title="Share this post on Twitter"
                sx={{
                  display: 'inline-block',
                  textDecoration: 'underline',
                  lineHeight: 2,
                  ':hover': { color: 'twitter' },
                }}
              >
                Twitter
              </Link>
            </Text>
          </Box>
        </Container>
      </React.Fragment>
    );
  };
};
