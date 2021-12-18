import React from "react";
import Image from "next/image";
const NavItemList = () => {
  return (
    <>
      {NavItems &&
        NavItems.map((item) => {
          return (
            <>
              <div>
                <p
                  className="ml-4 p-2 mr-4 text-sm text-white rounded
                            hover:bg-orange-300
                            hover:rounded 
                            hover:text-black
                            hover:cursor-pointer
                            transition ease-in-out delay-150
                            "
                >
                  {item.text}
                </p>
              </div>
            </>
          );
        })}
      <div>
        <p
          className=" bg-indigo-500 rounded ml-4 p-2 mr-4 text-sm text-white
                hover:bg-indigo-600
                hover:cursor-pointer
                "
        >
          Join Discord
        </p>
      </div>
      <div>
        <p
          className="bg-lime-600 rounded ml-4 p-2 mr-4 text-sm text-white
                hover:bg-lime-700	
                hover:cursor-pointer
                "
        >
          Join Github
        </p>
      </div>
    </>
  );
};
const NavItems = [
  {
    text: "Maintainers Program",
  },
  {
    text: "Team",
  },
  {
    text: "Showcase",
  },
];

const Navbar = (props: any) => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const handleClick = (route?: string) => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      {mobileMenu && (
        <div
          className="
                            h-screen w-screen p-4 bg-stone-900 flex-col
                            md:hidden lg:hidden xl:hidden 2xl:hidden
                            "
          onClick={() => {
            handleClick();
          }}
        >
          <div>
            <NavItemList />
          </div>
        </div>
      )}
      {!mobileMenu && (
        <>
          {" "}
          <div
            className="
        p-4 bg-stone-900 flex
        md:hidden lg:hidden xl:hidden 2xl:hidden"
          >
            <p className="grow font-bold text-3xl text-white">Tech Phantoms</p>
            <p
              className=" font-bold text-3xl text-white"
              onClick={() => {
                handleClick();
              }}
            >
              <Image src="/images/system/menu.svg" height="24" width="24" />
            </p>
          </div>
          <div className="hidden md:text-3xl  md:p-4 md:bg-stone-900 md:flex">
            <div className="grow">
              <p className="font-bold text-white">Tech Phantoms</p>
            </div>
            <NavItemList />
          </div>
        </>
      )}
    </>
  );
};
export default Navbar;
