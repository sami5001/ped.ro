import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { Link, Text, Box } from '@peduarte/wallop-system';
import { FrontMatter } from '../types';

export const BlogCard = ({ frontMatter }: { frontMatter: FrontMatter }) => {
  return (
    <Box mt={4}>
      <NextLink href={frontMatter.__resourcePath.replace('.mdx', '')} passHref>
        <Link
          title={`Read ${frontMatter.title}`}
          variant="ghost"
          sx={{
            display: 'inline-block',
            lineHeight: 3,
          }}
        >
          <Text size={4}>{frontMatter.title}</Text>
          <Text
            as="time"
            size={2}
            sx={{
              fontFamily: 'mono',
              display: 'block',
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
