import SectionContainer from "./sectionContainer";
import Link from "next/link";
import ThemeSwitch from "./themeSwitch";

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="py-3">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/">
              <div className="flex items-center justify-between cursor-pointer">
                <div className="mr-3">
                  <img
                    src="https://github.com/Tech-Phantoms/community/blob/main/assets/logo-1500px.png?raw=true"
                    width="50"
                  />
                </div>
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  Tech Phantoms
                </div>
              </div>
            </Link>
          </div>

          <div className="flex items-center text-base leading-5">
            {[{ href: "/blog", title: "Blog" }].map((link) => (
              <Link key={link.title} href={link.href}>
                <h1 className="p-1 font-semibold cursor-pointer">
                  {link.title}
                </h1>
              </Link>
            ))}

            <ThemeSwitch />
          </div>
        </header>
        <main className="md-auto">{children}</main>
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
