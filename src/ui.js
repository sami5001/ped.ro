import React from "react";
import { ComponentProvider } from "mdx-go";
import styled, { keyframes } from "styled-components";
import {
  fontSize,
  lineHeight,
  fontFamily,
  fontWeight,
  opacity,
  space,
  letterSpacing,
  color,
  width,
  maxWidth,
  left
} from "styled-system";

const show = keyframes`
		0% { opacity: 0 }
		100% { opacity: 1 }
	}
`;

const DELAY = 300;
const Base = styled.div`
  ${fontSize};
  ${lineHeight};
  ${space};
  ${opacity};
  ${fontWeight};
  animation: ${show} ${DELAY * 4}ms ${DELAY}ms ease both;
`;

Base.defaultProps = {
  fontSize: [2, 3, 4],
  lineHeight: 1.5,
  px: [4, 5, 6],
  py: 6,
  fontWeight: 300,
  opacity: 0
};

const Title = styled.h1`
  ${fontFamily};
  ${fontSize};
  ${lineHeight};
  ${letterSpacing};
  ${space};
  text-transform: uppercase;
`;

Title.defaultProps = {
  fontFamily: "Teko",
  fontSize: 6,
  lineHeight: 1,
  letterSpacing: "6px",
  m: 0,
  mb: [3, 4]
};

const Subtitle = styled.h2`
  ${fontFamily};
  ${fontSize};
  ${lineHeight};
  ${letterSpacing};
  ${color};
  ${space};
  text-transform: uppercase;
`;

Subtitle.defaultProps = {
  fontFamily: "Teko",
  fontSize: 3,
  lineHeight: 1.3,
  letterSpacing: "3px",
  color: "#cf1b41",
  m: 0,
  mb: 4
};

const SectionTitle = styled.h3`
  ${fontFamily};
  ${fontSize};
  ${lineHeight};
  ${letterSpacing};
  ${space};
  text-transform: uppercase;
`;

SectionTitle.defaultProps = {
  fontFamily: "Teko",
  fontSize: 3,
  lineHeight: 1.3,
  letterSpacing: "3px",
  m: 0,
  mb: 4
};

const Text = styled.p`
  ${maxWidth};
  ${space};
`;

Text.defaultProps = {
  maxWidth: 800,
  m: 0,
  ml: 4
};

const List = styled.ul`
  ${space};
  list-style: none;
`;

List.defaultProps = {
  m: 0,
  ml: 4,
  p: 0
};

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const svg = `<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	<polygon id="Path" fill="#000000" fill-rule="nonzero" points="0 24 16 0 32 24 32 32 16 8.00141567 0 32"></polygon>
</g>
</svg>`;

const Line = styled.div`
  height: 16px;
  text-align: center;
	background: url('data:image/svg+xml;utf-8,${svg}');
	background-size: 16px;
	position: relative;
	${width};
	${space};
	${left};
`;

Line.defaultProps = {
  my: 5,
  ml: 4,
  width: 0,
  pl: [4, 5, 6],
  left: -6
};

const Pre = styled.pre`
  ${fontFamily};
  ${fontSize};
`;

Pre.defaultProps = {
  fontFamily: `"Courier New", monospace`,
  fontSize: 1
};

const components = {
  h1: Title,
  h2: Subtitle,
  h3: SectionTitle,
  p: Text,
  ul: List,
  a: Link,
  hr: Line,
  pre: Pre
};

export const Root = ({ children }) => (
  <ComponentProvider components={components}>
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
