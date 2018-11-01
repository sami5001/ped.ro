import React from "react";
import { ComponentProvider } from "mdx-go";
import styled, { keyframes } from "styled-components";
import system from "system-components";

const show = keyframes`
		0% { opacity: 0 }
		100% { opacity: 1 }
	}
`;

const delay = 300;
const BaseWithAnimation = styled.div`
  opacity: 0;
  animation: ${show} ${delay * 4}ms ${delay}ms ease both;
`;

export const Base = system({
  is: BaseWithAnimation,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif`,
  fontSize: [2, 3, 4],
  lineHeight: 1.5,
  px: [3, 4, 5, 6],
  py: 6,
  fontWeight: 300
});

const H1 = system(
  {
    is: "h1",
    fontFamily: "Teko",
    fontSize: "inherit",
    lineHeight: 1,
    m: 0,
    mb: [3, 4],
    ml: [4],
    fontSize: [6]
  },
  `
	text-transform: uppercase;
	letter-spacing: 6px
`
);

const H2 = system(
  {
    is: "h2",
    fontFamily: "Teko",
    fontSize: [3],
    lineHeight: 1.3,
    color: "#cf1b41",
    m: 0,
    mb: [4],
    width: 90
  },
  `
	text-transform: uppercase;
	letter-spacing: 3px
`
);

const H3 = system(
  {
    is: "h2",
    fontFamily: "Teko",
    fontSize: [3],
    lineHeight: 1.3,
    m: 0,
    mb: [4],
    width: 90
  },
  `
	text-transform: uppercase;
	letter-spacing: 3px
`
);

const P = system({
  maxWidth: 800,
  m: 0,
  ml: [4]
});

const Ul = system(
  {
    is: "ul",
    m: 0,
    ml: 4,
    p: 0
  },
  `list-style: none;`
);

const A = system(
  {
    is: "a",
    color: "inherit"
  },
  `text-decoration: none;`
);

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
`;

const Hr = system(
  {
    is: Line,
    my: 5,
    ml: -6,
    width: 128 // can I get this from the theme?
  },
  `
border-bottom: ${props => themGet("space.0")(props)}px solid;
`
);

const Pre = system({
  fontFamily: `"Courier New", monospace`,
  fontSize: 1
});

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  a: A,
  hr: Hr,
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
