import GithubIcon from "../assets/icons/github.svg?react";
import EmailIcon from "../assets/icons/email.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import Resume from "./Resume";

export default function Presentation() {
  return (
    <section className="flex flex-col gap-8 w-full">
      <div className="component-wrapper flex flex-col items-center text-center gap-6 px-8">
        <div className="flex flex-col items-center gap-6">
          <img
            src="/foto-intro.jpg"
            alt="Profile image"
            width={200}
            className="rounded-full object-cover"
          />
          <p className="max-w-2xl text-xl">
            En <strong>webudvikler</strong> fra Danmark, Aarhus. 📍 <br /> Lad
            os arbejde sammen!
          </p>
        </div>

        <div className="flex gap-8 bg-white px-3 py-1 rounded-full border-2 border-black">
          <a
            href="https://github.com/smw22"
            target="_blank"
            aria-label="Check my GitHub profile"
            className="p-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-btn-blue hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="mailto:sergiomoronwestergaard@gmail.com"
            target="_blank"
            aria-label="Send me an email"
            className="p-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-btn-blue hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]"
          >
            <EmailIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sergio-mw/?locale=da-DK"
            target="_blank"
            aria-label="Check my LinkedIn profile"
            className="p-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-btn-blue hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href="tel:+4550355856"
            target="_blank"
            aria-label="Call me or text me"
            className="p-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-btn-blue hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]"
          >
            <PhoneIcon className="w-6 h-6" />
          </a>
        </div>
      </div>

      <Resume />
    </section>
  );
}
