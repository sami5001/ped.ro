import React from 'react';
import { Container, Box, Text, Link } from '@modulz/primitives';
// @ts-ignore
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import { FrontMatter } from '../types';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { BlogCard } from '../components/BlogCard';

const Home = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Container px={[3, 5]} py={6} sx={{ maxWidth: 720 }}>
        <Text
          as="h1"
          sx={{
            fontFamily: 'normal',
            fontSize: 4,
            fontWeight: 600,
          }}
        >
          Pedro Duarte
        </Text>

        <Text
          as="p"
          mt={4}
          mx="auto"
          sx={{
            fontFamily: 'normal',
            fontSize: 1,
            fontWeight: 400,
            lineHeight: 2,
          }}
        >
          I'm a UI developer interested in design systems, jamstack, user/dev experience and under engineering.
        </Text>

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
          Right now I'm working with{' '}
          <Link
            href="https://modulz.app"
            target="_blank"
            sx={{
              textDecoration: 'underline',
              ':hover': { color: 'blue' },
            }}
          >
            Modulz
          </Link>{' '}
          to help close the gap between design—development.
        </Text>

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
          I was born in Brazil, raised in the UK and now living in Barcelona with my little family.
        </Text>

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
          You can find me on{' '}
          <Link
            href="https://modulz.app"
            target="_blank"
            sx={{
              textDecoration: 'underline',
              ':hover': { color: 'twitter' },
            }}
          >
            Twitter
          </Link>{' '}
          or{' '}
          <Link
            href="https://modulz.app"
            target="_blank"
            sx={{
              textDecoration: 'underline',
              ':hover': { color: 'gray' },
            }}
          >
            Github
          </Link>
          .
        </Text>

        <Text
          as="h3"
          mt={5}
          mx="auto"
          sx={{
            fontFamily: 'normal',
            fontSize: 2,
            fontWeight: 600,
            lineHeight: 2,
          }}
        >
          Writing
        </Text>

        {blogPosts
          .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
          .map((post: FrontMatter) => (
            <BlogCard frontMatter={post} />
          ))}
      </Container>
    </Box>
  );
};

export default Home;
