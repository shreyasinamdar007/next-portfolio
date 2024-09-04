"use client";
// import Image from "next/image";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import shre from "../../public/User1.png";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import { Experience } from "./experience";
import Head from "next/head";
import "./page.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [company, setCompany] = useState("Cavista");

  return (
    <div>
      <Head>
        <title>Shreyas Inamdar</title>
        <meta property="og:title" content="Shreyas Inamdar" key="title" />
      </Head>

      <main className="px-10 bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-2xl">Shreyas Inamdar</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  target="_blank"
                  href="https://drive.google.com/file/d/17rvpNEofN7n7uD-VP5wCDXt15zJ13r7h/view?usp=sharing"
                  download="Shreyas_Inamdar_CV.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Shreyas Inamdar
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              I am{" "}
              <TypeAnimation
                sequence={[
                  "a Full-Stack Developer",
                  3000,
                  "a Part-Time Stock Trader",
                  3000,
                  "a Philosophy Enthusiast",
                  3000,
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a dedicated Full-Stack Developer with around 4 years of
              experience in application development. Beyond my technical skills,
              I am an avid reader, explorer, and sports enthusiast. I enjoy both
              playing and watching sports. I also have B1 level proficiency in
              German Language. For a detailed overview of my technical
              expertise, please see below.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                className="cursor-pointer"
                href="https://www.linkedin.com/in/shreyas-inamdar-a12659158/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="cursor-pointer"
                href="https://github.com/shreyasinamdar007"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              <a
                className="cursor-pointer"
                href="https://www.instagram.com/the_real_element_119/?next=%2F&hl=en"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full sm:w-auto lg:w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={shre} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Here's a bit about me
            </h3>
          </div>
          <div className="lg:flex gap-5">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Frontend Technologies
              </h3>
              <p className="py-2">
                Collaborated on multiple projects utilizing JavaScript-based
                frontend frameworks, delivering responsive and high-performance
                web applications.
              </p>
              <h4 className="py-4 text-teal-600">Frontend Frameworks I Use</h4>
              <p className="text-gray-800 py-1">JavaScript / TypeScript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Vue.JS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Backend Technologies
              </h3>
              <p className="py-2">
                Developed backend systems using Node.js frameworks like
                Express.js and Nest.js, with experience in managing databases
                such as PostgreSQL and MongoDB.
              </p>
              <h4 className="py-4 text-teal-600">Backend Frameworks I Use</h4>
              <p className="text-gray-800 py-1">Express.JS</p>
              <p className="text-gray-800 py-1">Nest.JS</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">PostgreSQL DB</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Interests</h3>
              <p className="py-2">
                I have a deep passion for philosophy, sports, and traveling, all
                of which play a significant role in shaping my life. These
                interests enrich and act as inspiration in my personal life.
              </p>
              <h4 className="py-4 text-teal-600">Things I Love to do</h4>
              <p className="text-gray-800 py-1">Reading</p>
              <p className="text-gray-800 py-1">Travelling</p>
              <p className="text-gray-800 py-1">Sports</p>
              <p className="text-gray-800 py-1">Communicate</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Where I worked</h3>
            <div className="flex lg:w-3/4 sm:w-full cursor-pointer ml-1 my-4">
              <div
                onClick={() => setCompany("Cavista")}
                className={`w-1/3 lg:text-xl transition ease-in-out delay-600 sm:text-sm text-white bg-transparent h-10 ${
                  company == "Cavista" ? "border-b-4 border-b-teal-500" : ""
                }`}
              >
                Cavista
              </div>
              <div
                onClick={() => setCompany("Coditas")}
                className={`w-1/3 lg:text-xl transition ease-in-out delay-600 text-white sm:text-sm bg-transparent h-10 ${
                  company == "Coditas" ? "border-b-4 border-b-teal-500" : ""
                }`}
              >
                Coditas
              </div>
              <div
                onClick={() => setCompany("Vivaran")}
                className={`w-1/3 lg:text-xl transition ease-in-out delay-600 text-white sm:text-sm bg-transparent h-10 ${
                  company == "Vivaran" ? "border-b-4 border-b-teal-500" : ""
                }`}
              >
                Vivaran
              </div>
            </div>

            <div>
              <ul className="text-white transition duration-700 ease-in-out lg:text-base">
                <div className="text-lg">{Experience[company]?.title}</div>
                <div className="text-lg text-gray-400">
                  {Experience[company]?.date}
                </div>
                {Experience[company]?.bulletPoints.map((bullets, index) => {
                  return (
                    <li
                      className={`flex animate-pulse space-x-3 rtl:space-x-reverse`}
                      key={index}
                    >
                      <div className="pr-1 pt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#2d7c40"
                            d="m21.188 9.28l-1.407 1.44L24.063 15H4v2h20.063l-4.282 4.28l1.407 1.44l6-6l.72-.72l-.72-.72z"
                          />
                        </svg>
                      </div>
                      <span className="pt-0.5">{bullets}</span>
                    </li>
                  );
                })}
                {
                  <li className="flex font-bold pt-1 space-x-3 rtl:space-x-reverse">
                    <span className="text-green-600">Tech Stack:</span> &nbsp;
                    <span className="text-orange-500">
                      {Experience[company].techStack}
                    </span>
                  </li>
                }
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
