import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1
        style={{
          color: "#713f12",
          fontSize: "60px",
          fontFamily: "cinzel",
          fontWeight: "700",
          lineHeight: "1"
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          color: "#713f12",
          fontSize: "40px",
          fontFamily: "cinzel",
          fontWeight: "900",
          paddingTop: "52px"
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          color: "#713f12",
          fontSize: "32px",
          fontFamily: "cinzel",
          fontWeight: "800",
          paddingTop: "32px"
        }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{
          color: "#713f12",
          fontSize: "26px",
          fontFamily: "cinzel",
          paddingTop: "10px",
          fontWeight: "700"
        }}
      >
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p
        style={{
          color: "black",
          fontSize: "18px",
          fontFamily: "sans-serif",
          fontKerning: "normal",
          lineHeight: "2",
          paddingBlock: "8px"
        }}
      >
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a
        style={{ color: "#713f12", fontSize: "16px", fontFamily: "sans-serif" }}
        href={href}
      >
        {children}
      </a>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components
  };
}
