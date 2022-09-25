import {MDXProvider} from '@mdx-js/react';


export default function MDXProviderWrapper({children}) {
    return (
        <MDXProvider components={getMDXComponents()}>
            {children}
        </MDXProvider>
    )
}

const textStyle = 'text-dracula-darker-600 dark:text-dracula-light-100'

const getMDXComponents = () => {
  return {
    h1: (props) => (
      <h1
        {...props}
        className={`${
          props.className || ""
        } my-4 font-heading antialiased font-semibold tracking-heading text-2xl ${textStyle}`}
      />
    ),
    h2: (props) => (
      <h2
        {...props}
        className={`${
          props.className || ""
        } mb-4 mt-6 font-heading antialiased font-semibold tracking-heading text-2xl ${textStyle}`}
      />
    ),
    h3: (props) => (
      <h3
        {...props}
        className={`${
          props.className || ""
        } mb-4 mt-6 font-heading antialiased font-medium tracking-heading ${textStyle} text-lg`}
      />
    ),
    h4: (props) => (
      <h4
        {...props}
        className={`${
          props.className || ""
        } my-4 font-heading antialiased font-medium text-lg ${textStyle}`}
      />
    ),
    h5: (props) => (
      <h5
        {...props}
        className={`${
          props.className || ""
        } my-4 font-heading antialiased text-md font-bold ${textStyle}`}
      />
    ),
    h6: (props) => (
      <h6
        {...props}
        className={`${
          props.className || ""
        } my-4 font-heading antialiased text-sm font-bold ${textStyle} uppercase`}
      />
    ),
    blockquote: (props) => (
      <blockquote
        {...props}
        className={`${
          props.className || ""
        } italic font-body antialiased dark:bg-dracula-darker-600 dark:border-dracula-blue-50 text-dracula-darker-700 border-l-4 border-dracula-dark-400 pl-4 pt-1 pb-1 pr-1 my-4 bg-dracula-blue-50`}
      />
    ),
    p: (props) => (
      <p
        {...props}
        className={`${
          props.className || ""
        } my-4 font-regular font-body antialiased dark:text-dracula-light-100 text-dracula-darker-600`}
      />
    ),
    strong: (props) => (
      <strong
        {...props}
        className={`${
          props.className || ""
        } my-4 font-semibold font-body antialiased`}
      />
    ),
    a: (props) => (
      <a
        {...props}
        className={`${
          props.className
            ? props.className
            : "font-semibold border-b border-secondary-400 hover:border-secondary-500 transition ease-in-out duration-300"
        } font-body antialiased`}
      />
    ),
    ul: (props) => (
      <ul
        {...props}
        className={`${
          props.className || ""
        } my-4 ml-4 list-disc ${textStyle} font-normal font-body antialiased`}
      />
    ),
    ol: (props) => (
      <ol
        {...props}
        className={`${
          props.className || ""
        } my-4 ml-4 list-decimal ${textStyle} font-normal font-body antialiased`}
      />
    ),
    li: (props) => (
      <li
        {...props}
        className={`${
          props.className || ""
        } my-3 ${textStyle} font-regular tracking-tight font-body antialiased`}
      />
    ),
  };
};