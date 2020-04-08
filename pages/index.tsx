import React from 'react';
import { Container, Box, Text, Link } from '@peduarte/wallop-system';
import { blogPosts } from '../utils/blogPosts';
import { FrontMatter } from '../types';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { BlogCard } from '../components/BlogCard';

const Home = () => {
  return (
    <>
      <TitleAndMetaTags />

      <Box sx={{ bg: 'white', color: 'black' }}>
        <Container mx={[4, 5, 6]} py={[4, 5]}>
          <Text as="h1" size={2} mb={[5, 6]} weight="medium" sx={{ textTransform: 'uppercase' }}>
            Pedro <Text sx={{ color: 'gray' }}>Duarte</Text>
          </Text>

          <Text as="p" size={5}>
            I'm a UI developer interested in design systems, jamstack, user/dev experience and under engineering.
          </Text>

          <Text as="p" size={5} mt={5}>
            Right now I'm working with{' '}
            <Link href="https://modulz.app" target="_blank">
              Modulz
            </Link>{' '}
            to help close the gap between design—dev.
          </Text>

          <Text as="p" size={5} mt={5}>
            I was born in Brazil, raised in the UK and now living in Barcelona with my little family.
          </Text>

          <Text as="p" size={5} mt={5} mb={6}>
            You can find me on{' '}
            <Link href="https://twitter.com/peduarte" target="_blank">
              Twitter
            </Link>{' '}
            or{' '}
            <Link href="https://github.com/peduarte" target="_blank">
              Github
            </Link>
            .
          </Text>
        </Container>
      </Box>

      <Box p={[4, 5]} sx={{ bg: 'yellow' }}>
        <Box mt={[-5, -6]} p={[4, 5]} sx={{ bg: 'black', color: 'white', borderRadius: 1 }}>
          <Text as="h3" mx="auto" size={3} mb={5} weight="medium">
            Writing
          </Text>

          {blogPosts.map((post: FrontMatter) => (
            <BlogCard key={post.title} frontMatter={post} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
