import React from 'react';
import { Container, Box, Text, Link } from '@peduarte/wallop-system';
import { blogPosts } from '../utils/blogPosts';
import { FrontMatter } from '../types';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { BlogCard } from '../components/BlogCard';

const Home = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Container px={[3, 6]} py={7}>
        <Text as="h1" size={6} sx={{ fontWeight: 600 }}>
          Pedro Duarte
        </Text>

        <Text as="p" size={3} mt={5} mx="auto">
          I'm a UI developer interested in design systems, jamstack, user/dev experience and under engineering.
        </Text>

        <Text as="p" mt={4} mx="auto" size={3}>
          Right now I'm working with{' '}
          <Link href="https://modulz.app" target="_blank">
            Modulz
          </Link>{' '}
          to help close the gap between design—dev.
        </Text>

        <Text as="p" mt={4} mx="auto" size={3}>
          I was born in Brazil, raised in the UK and now living in Barcelona with my little family.
        </Text>

        <Text as="p" mt={4} mx="auto" size={3}>
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

        <Text as="h3" mt={6} mx="auto" size={4} sx={{ fontWeight: 600 }}>
          Writing
        </Text>

        {blogPosts.map((post: FrontMatter) => (
          <BlogCard key={post.title} frontMatter={post} />
        ))}
      </Container>
    </Box>
  );
};

export default Home;
