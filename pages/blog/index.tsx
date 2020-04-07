import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Text, Link } from '@peduarte/wallop-system';
import { blogPosts } from '../../utils/blogPosts';
import { FrontMatter } from '../../types';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';
import { BlogCard } from '../../components/BlogCard';

const Blog = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Container px={[3, 6]} py={7}>
        <NextLink href="/" passHref>
          <Link sx={{ position: 'absolute', top: 4 }}>↞ ped.ro</Link>
        </NextLink>

        <Text as="h1" size={5} sx={{ fontWeight: 600 }}>
          Blog
        </Text>

        {blogPosts.map((post: FrontMatter) => (
          <BlogCard key={post.title} frontMatter={post} />
        ))}
      </Container>
    </Box>
  );
};

export default Blog;
