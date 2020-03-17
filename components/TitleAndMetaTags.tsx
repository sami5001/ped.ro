import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type TitleAndMetaTagsProps = {
  url?: string;
  pathname?: string;
  title?: string;
  description?: string;
};

export default function TitleAndMetaTags({
  url = 'https://ped.ro',
  pathname,
  title = 'Pedro Duarte',
  description = 'UI developer based in Barcelona',
}: TitleAndMetaTagsProps) {
  const router = useRouter();
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:url" content={`${url}${path}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@peduarte" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@peduarte" />
    </Head>
  );
}
