import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import LayoutWrapper from "../components/layoutWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <MDXProvider components={getMDXComponents()}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </MDXProvider>
    </ThemeProvider>
  );
}

const getMDXComponents = () => {
  return {
    h1: (props) => (
      <h1
        {...props}
        className={`${
          props.className || ""
        } my-4 font-heading antialiased font-semibold tracking-heading text-gray-900 text-2xl dark:text-gray-50`}
      />
    ),
    h2: (props) => (
      <h2
        {...props}
        className={`${
          props.className || ""
        } mb-4 mt-6 font-heading antialiased font-semibold tracking-heading text-gray-900 text-2xl`}
      />
    ),
    h3: (props) => (
      <h3
        {...props}
        className={`${
          props.className || ""
        } mb-4 mt-6 font-heading antialiased font-medium tracking-heading text-gray-900 text-lg`}
      />
    ),
    h4: (props) => (
      <h4
        {...props}
        className={`${
          props.className || ""
        } my-4 font-heading antialiased font-medium text-lg text-gray-900`}
      />
    ),
    h5: (props) => (
      <h5
        {...props}
        className={`${
          props.className || ""
        } my-4 font-heading antialiased text-md font-bold`}
      />
    ),
    h6: (props) => (
      <h6
        {...props}
        className={`${
          props.className || ""
        } my-4 font-heading antialiased text-sm font-bold text-gray-900 uppercase`}
      />
    ),
    blockquote: (props) => (
      <blockquote
        {...props}
        className={`${
          props.className || ""
        } italic font-body antialiased text-gray-700 border-l-4 border-gray-400 pl-4 pt-1 pb-1 pr-1 my-4 bg-white`}
      />
    ),
    p: (props) => (
      <p
        {...props}
        className={`${
          props.className || ""
        } my-4 text-gray-700 font-regular font-body antialiased`}
      />
    ),
    strong: (props) => (
      <strong
        {...props}
        className={`${
          props.className || ""
        } my-4 text-gray-800 font-semibold font-body antialiased`}
      />
    ),
    a: (props) => (
      <a
        {...props}
        className={`${
          props.className
            ? props.className
            : "text-gray-900 font-semibold border-b border-secondary-400 hover:border-secondary-500 transition ease-in-out duration-300"
        } font-body antialiased`}
      />
    ),
    ul: (props) => (
      <ul
        {...props}
        className={`${
          props.className || ""
        } my-4 ml-4 list-disc text-gray-700 font-normal font-body antialiased`}
      />
    ),
    ol: (props) => (
      <ol
        {...props}
        className={`${
          props.className || ""
        } my-4 ml-4 list-decimal text-gray-700 font-normal font-body antialiased`}
      />
    ),
    li: (props) => (
      <li
        {...props}
        className={`${
          props.className || ""
        } my-3 text-gray-700 font-regular tracking-tight font-body antialiased`}
      />
    ),
  };
};

export default MyApp;
