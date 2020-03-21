import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { Link, Text, Box } from '@modulz/primitives';
import { FrontMatter } from '../types';

export const BlogCard = ({ frontMatter }: { frontMatter: FrontMatter }) => {
  return (
    <Box mt={3}>
      <NextLink href={frontMatter.__resourcePath.replace('.mdx', '')} passHref>
        <Link
          title={`Read ${frontMatter.title}`}
          sx={{
            display: 'inline-block',
            lineHeight: 2,
            ':hover': { color: 'red' },
          }}
        >
          <Text
            sx={{
              fontFamily: 'normal',
              display: 'inline-block',
              fontSize: 1,
              fontWeight: 400,
              lineHeight: 2,
            }}
          >
            {frontMatter.title}
          </Text>
          <Text
            mx="auto"
            sx={{
              display: 'block',
              fontFamily: 'mono',
              fontSize: 0,
              fontWeight: 400,
              color: 'gray',
            }}
          >
            {format(parseISO(frontMatter.publishedAt), 'MMMM "yy')}
          </Text>
        </Link>
      </NextLink>
    </Box>
  );
};
