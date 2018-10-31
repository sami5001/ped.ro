import React from "react";
import { ComponentProvider } from "mdx-go";
import system from "system-components";

export const Base = system({
  fontSize: [2, 3, 4],
  lineHeight: 1.5,
  px: [3, 4, 5, 6],
  py: 6
});

const H1 = system({
  is: "h1",
  fontSize: "inherit",
  m: 0,
  mb: [3, 4]
});

const H2 = system({
  is: "h2",
  fontSize: "inherit",
  m: 0
});

const P = system({
  maxWidth: 600,
  m: 0
});

const Ul = system(
  {
    is: "ul",
    m: 0,
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

const Hr = system({
  is: "hr",
  mx: 0,
  my: 6,
  width: 60,
  border: 0,
  borderBottom: 4,
  borderColor: "currentColor"
});

const components = {
  h1: H1,
  h2: H2,
  p: P,
  ul: Ul,
  a: A,
  hr: Hr
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
