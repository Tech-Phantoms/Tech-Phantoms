import Image from "next/image";
import Link from "next/link";
const sponsors = [
  {
    image: "/images/system/sponsors/vercel.svg",
    link: "https://vercel.com/techphantoms?utm_source=techphantoms&utm_campaign=oss",
  },
  {
    image: "/images/system/sponsors/onepass.svg",
    link: "https://1password.com/?utm_source=techphantoms&utm_campaign=oss",
  },
];
const Hero = () => {
  return (
    <>
      <div
        className="w-screen h-screen
    bg-stone-900 
    flex
    "
      >
        <div className=" p-20 w-1/2 text-white">
          <p className="text-4xl md:text-8xl">
            Build-Network <br />
            Open Source
          </p>
          <div className="text-4xl mt-12 p-2">
            Build with a Community which is just as exciting as you!
          </div>
          <p
            className="bg-sky-400	 rounded mt-12 ml-2 p-3 w-48
                text-sm text-white md:text-xl text-center
                hover:bg-sky-500	
                hover:cursor-pointer
                transition ease-in-out delay-150

                "
          >
            Join Us
          </p>
          <p className="text-gray-400 text-md mt-12 p-3">Sponsored by:</p>
          <p className="text-gray-400 text-md  p-3">
            {sponsors.map((sponsor) => (
              <span className="mr-12">
                <Link href={sponsor.link}>
                  <a>
                    <Image src={sponsor.image} width="200" height="78" />
                  </a>
                </Link>
              </span>
            ))}
          </p>
        </div>
        <div className="hidden p-4 md:block md:flex w-1/2 text-white">
          <div className="w-full h-full">
            <Image
              src="/images/system/hero.svg"
              layout="responsive"
              width="700"
              height="700"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
