import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Text, Link } from '@modulz/primitives';
// @ts-ignore
import { frontMatter as blogPosts } from './**/*.mdx';
import { FrontMatter } from '../../types';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';
import { BlogCard } from '../../components/BlogCard';

const Blog = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Container px={[3, 5]} py={6} sx={{ maxWidth: 720 }}>
        <NextLink href="/" passHref>
          <Link sx={{ position: 'absolute', top: 3, lineHeight: 2, ':hover': { color: 'red' } }}>↞ ped.ro</Link>
        </NextLink>

        <Text
          as="h1"
          sx={{
            fontFamily: 'normal',
            fontSize: 4,
            fontWeight: 600,
          }}
        >
          Blog
        </Text>

        {blogPosts
          .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
          .map((post: FrontMatter) => (
            <BlogCard key={post.title} frontMatter={post} />
          ))}
      </Container>
    </Box>
  );
};

export default Blog;
