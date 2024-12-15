import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1
        style={{
          color: "#713f12",
          fontSize: "40px",
          fontFamily: "Cinzel, serif",
          fontWeight: "700",
          lineHeight: "1",
          paddingBlock: "20px"
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          color: "#713f12",
          fontSize: "32px",
          fontFamily: "Cinzel, serif",
          fontWeight: "700",
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
          fontSize: "28px",
          fontFamily: "Cinzel, serif",
          fontWeight: "700",
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
          fontFamily: "Cinzel, serif",
          paddingTop: "10px",
          fontWeight: "700"
        }}
      >
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5
        style={{
          color: "#713f12",
          fontSize: "24px",
          fontFamily: "Cinzel, serif",
          fontWeight: "600",
          paddingTop: "8px"
        }}
      >
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6
        style={{
          color: "#713f12",
          fontSize: "22px",
          fontFamily: "Cinzel, serif",
          fontWeight: "600",
          paddingTop: "6px"
        }}
      >
        {children}
      </h6>
    ),

    // Paragraph
    p: ({ children }) => (
      <p
        style={{
          color: "black",
          fontSize: "18px",
          fontFamily: "Arial, sans-serif",
          fontKerning: "normal",
          lineHeight: "2",
          paddingBlock: "8px"
        }}
      >
        {children}
      </p>
    ),

    // Links
    a: ({ children, href }) => (
      <a
        style={{
          color: "#713f12",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          textDecoration: "underline",
          fontWeight: "600"
        }}
        href={href}
      >
        {children}
      </a>
    ),

    // Image
    img: (props) => (
      <Image
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }}
        {...(props as ImageProps)}
      />
    ),

    // Unordered List
    ul: ({ children }) => (
      <ul
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "18px",
          lineHeight: "2",
          paddingLeft: "30px",
          color: "black"
        }}
      >
        {children}
      </ul>
    ),

    // Ordered List
    ol: ({ children }) => (
      <ol
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "18px",
          lineHeight: "2",
          paddingLeft: "30px",
          color: "black"
        }}
      >
        {children}
      </ol>
    ),

    // List Item
    li: ({ children }) => (
      <li
        style={{
          marginBottom: "10px",
          paddingLeft: "10px",
          listStyleType: "disc"
        }}
      >
        {children}
      </li>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #713f12",
          paddingLeft: "15px",
          fontStyle: "italic",
          color: "#666",
          fontFamily: "Arial, sans-serif",
          fontSize: "18px",
          marginLeft: "0",
          marginRight: "0"
        }}
      >
        {children}
      </blockquote>
    ),

    // Code Inline
    code: ({ children }) => (
      <code
        style={{
          backgroundColor: "#f4f4f4",
          padding: "2px 4px",
          borderRadius: "4px",
          fontFamily: "Courier, monospace",
          fontSize: "16px",
          color: "#713f12"
        }}
      >
        {children}
      </code>
    ),

    // Pre (Code Block)
    pre: ({ children }) => (
      <pre
        style={{
          backgroundColor: "#f4f4f4",
          padding: "15px",
          borderRadius: "8px",
          overflowX: "auto",
          fontFamily: "Courier, monospace",
          fontSize: "16px",
          lineHeight: "1.5"
        }}
      >
        {children}
      </pre>
    ),

    // Strong (Bold)
    strong: ({ children }) => (
      <strong
        style={{
          fontWeight: "700",
          color: "#713f12"
        }}
      >
        {children}
      </strong>
    ),

    // Emphasis (Italic)
    em: ({ children }) => (
      <em
        style={{
          fontStyle: "italic",
          color: "#666"
        }}
      >
        {children}
      </em>
    ),

    // Horizontal Rule
    hr: () => (
      <hr
        style={{
          border: "none",
          borderTop: "2px solid #713f12",
          margin: "20px 0"
        }}
      />
    ),

    ...components
  };
}
