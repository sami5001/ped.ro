import React from "react";
import { ComponentProvider } from "mdx-go";
import styled, { css, createGlobalStyle, keyframes } from "styled-components";

const highlightColor = "hsla(0, 80%, 50%, 1)";

const GlobalStyle = createGlobalStyle`
	:root {
		--space: 32px;
		--type: 20px;
		--primary-color: hsla(1, 100%, 100%, 1);
		--secondary-color: hsla(0, 0%, 0%, .99);
		--highlight-color: ${highlightColor};
	}

	@media(min-width: 40em) {
		:root {
			--space: 64px;
			--type: 24px;
		}
	}

	@media(min-width: 52em) {
		:root {
			--space: 128px;
			--type: 32px;
		}
	}

	::selection {
		background: var(--secondary-color);
		color: var(--primary-color);
		opacity: 0;
	}
`;

const show = keyframes`
		0% { opacity: 0 }
		100% { opacity: 1 }
	}
`;

const Base = styled.div`
  font-size: var(--type);
  font-weight: 700;
  line-height: 1.5;
  padding: var(--space);
  background-color: var(--primary-color);
  color: var(--secondary-color);
  animation: ${show} 2s ease both;

  @media (max-width: 40em) {
    padding-top: calc(var(--space) * 3);
    padding-bottom: calc(var(--space) * 3);
  }
`;

const resetHeading = css`
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
`;

const Title = styled.h1`
  ${resetHeading};
`;

const Subtitle = styled.h2`
  ${resetHeading};
  color: var(--highlight-color);
`;

const SectionTitle = styled.h3`
  ${resetHeading};
  margin-bottom: var(--space);
`;

const JobTitle = styled.h4`
  ${resetHeading};
  max-width: 800px;
  margin-bottom: calc(var(--space) / 2);
  margin-left: var(--space);

  em {
    display: block;
    font-style: normal;
  }
`;

const Text = styled.p`
  max-width: 800px;
  margin: 0 0 var(--space) var(--space);
`;

const List = styled.ul`
  list-style: none;
  max-width: 800px;
  margin: 0 0 var(--space) var(--space);
  padding: 0;
`;

const A = styled.a`
  color: inherit;
  transition: color 300ms;

  &:hover {
    color: var(--highlight-color);
  }
`;

const Link = ({ href: _href, ...props }) => {
  let href = _href;
  const isAbsoluteUrl = href => /^https?:\/\/|^\/\//i.test(href);

  if (!isAbsoluteUrl(href)) {
    href = href.replace(".md", "");
  }

  return <A href={href} {...props} />;
};

const svg = `
	<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<polygon fill="${highlightColor}" points="0 24 16 0 32 24 32 32 16 8.00141567 0 32"></polygon>
	</svg>
`;

const ZigZag = styled.div`
	background: url('data:image/svg+xml;utf-8,${svg}');
	background-size: 16px;
  height: 16px;
	margin: var(--space) 0 var(--space) calc(var(--space) * -1);
  width: calc(var(--space) * 2);

	@media(max-width: 40em) {
		margin-top: calc(var(--space) * 3);
		margin-bottom: calc(var(--space) * 3);
	}
`;

const Pre = styled.pre`
  font-family: "Courier New", monospace;
  font-size: 12px;
  font-weight: 400;
`;

const components = {
  h1: Title,
  h2: Subtitle,
  h3: SectionTitle,
  h4: JobTitle,
  p: Text,
  ul: List,
  a: Link,
  hr: ZigZag,
  pre: Pre,
};

export const Root = ({ children }) => (
  <ComponentProvider components={components}>
    <GlobalStyle />
    <Base>{children}</Base>
  </ComponentProvider>
);

const ga = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-28314827-1', 'auto'); ga('send', 'pageview');
`;

export const GA = () => <script dangerouslySetInnerHTML={{ __html: ga }} />;
