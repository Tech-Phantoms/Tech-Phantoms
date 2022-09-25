import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import LayoutWrapper from "../components/layoutWrapper";
import MDXProviderWrapper from "../components/MDX";

const textStyle = "text-dracula-darker dark:text-dracula-light";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <MDXProviderWrapper>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </MDXProviderWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
