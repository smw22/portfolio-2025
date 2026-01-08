import ReactIcon from "../assets/icons/react.svg?react";
import VueIcon from "../assets/icons/vue.svg?react";
import TypescriptIcon from "../assets/icons/typescript.svg?react";
import JavascriptIcon from "../assets/icons/javascript.svg?react";
import NodejsIcon from "../assets/icons/nodejs.svg?react";
import NestjsIcon from "../assets/icons/nestjs.svg?react";
import MysqlIcon from "../assets/icons/mysql.svg?react";
import FirebaseIcon from "../assets/icons/firebase.svg?react";
import GitIcon from "../assets/icons/git.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import WordpressIcon from "../assets/icons/wordpress.svg?react";
import TailwindIcon from "../assets/icons/tailwind.svg?react";
import FigmaIcon from "../assets/icons/figma.svg?react";

export default function Stack() {
  return (
    <section className="component-wrapper mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center">TECH STACK</h2>
      <div className="flex items-center justify-center gap-8 flex-wrap bg-white rounded-full p-6 border-2 border-black">
        <div className="flex flex-col items-center gap-2">
          <ReactIcon className="w-8 h-8" />
          <span className="text-sm">React</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <VueIcon className="w-8 h-8" />
          <span className="text-sm">Vue</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TypescriptIcon className="w-8 h-8" />
          <span className="text-sm">TypeScript</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <JavascriptIcon className="w-8 h-8" />
          <span className="text-sm">JavaScript</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <NodejsIcon className="w-8 h-8" />
          <span className="text-sm">Node.js</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <NestjsIcon className="w-8 h-8" />
          <span className="text-sm">Nest.js</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <MysqlIcon className="w-8 h-8" />
          <span className="text-sm">Mysql</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FirebaseIcon className="w-8 h-8" />
          <span className="text-sm">Firebase</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <WordpressIcon className="w-8 h-8" />
          <span className="text-sm">WordPress</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <GitIcon className="w-8 h-8" />
          <span className="text-sm">Git</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <GithubIcon className="w-8 h-8" />
          <span className="text-sm">GitHub</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TailwindIcon className="w-8 h-8" />
          <span className="text-sm">Tailwind</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FigmaIcon className="w-8 h-8" />
          <span className="text-sm">Figma</span>
        </div>
      </div>
    </section>
  );
}
