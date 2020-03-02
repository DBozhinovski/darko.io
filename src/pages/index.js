import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

import leftBg from '../images/dark_mosaic_@2X.png';
import profile from '../images/profile.jpg';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div
        className="xl:w-2/3 xl:h-screen lg:w-2/3 lg:h-screen md:w-1/2 md:w-full md:h-screen/2 sm:w-full sm:h-screen/2 w-full h-screen/2 border-b-4 border-r-0 flex flex-col justify-center
        items-center xl:border-r-4 lg:border-r-4 lg:border-b-0 md:border-b-4 md:border-r-0 sm:border-r-0 sm:border-b-4 border-dotted border-orange-600 py-10"
        style={{ background: `url(${leftBg}) repeat` }}
      >
        <div className="w-full flex flex-col justify-center items-center flex-grow">
          <h1 className="text-6xl text-center">Hi! I&apos;m <span className="text-orange-600">Darko</span>.</h1>
          <h2 className="text-lg text-center">I do software, mostly of the web persuasion.</h2>
        </div>
        <a href='mailto:hello@darko.io' className="text-lg py10 block transition duration-200 ease-out hover:bg-white hover:text-black transform hover:scale-110 p-3">hello@darko.io</a>
      </div>
      <div className="flex flex-col xl:h-screen lg:h-screen lg:w-1/3 xl:w-1/3 md:w-full md:h-screen/2 sm:w-full md:h-screen w-full">
        <div className="xl:w-full lg:w-full lg:flex xl:flex md:hidden sm:hidden hidden h-screen/2 flex justify-center items-center overflow-hidden">
          <div style={{ background: `url(${profile})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'  }} className="w-full h-full opacity-50"></div>
        </div>
        <div className="xl:w-full lg:w-full xl:h-screen/2 lg:h-screen/2 flex justify-center items-center bg-orange-600 md:h-full md:w-full md:h-screen sm:h-screen/2 h-screen/2">
          <ul className="text-center text-4xl text-black">
            <li className="transition duration-200 ease-out hover:bg-white transform hover:scale-110">
              <a href="https://blog.darko.io" className="block">[ Blog ]</a>
            </li>
            <li className="transition duration-200 ease-out hover:bg-white transform hover:scale-110">
              <a href="https://github.com/dbozhinovski" className="block">[ GitHub ]</a>
            </li>
            <li className="transition duration-200 ease-out hover:bg-white transform hover:scale-110">
              <a href="https://resume.darko.io" className="block">[ Resume ]</a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
