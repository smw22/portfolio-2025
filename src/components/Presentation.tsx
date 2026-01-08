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
            En <strong>webudviklere</strong> fra Danmark, Aarhus. 📍 <br /> Lad
            os arbejde sammen!
          </p>
        </div>

        <div className="flex gap-8 bg-white px-3 py-1 rounded-full border-2 border-black">
          <button className="p-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-btn-blue hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]">
            <GithubIcon className="w-6 h-6" />
          </button>
          <button className="p-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-btn-blue hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]">
            <EmailIcon className="w-6 h-6" />
          </button>
          <button className="p-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-btn-blue hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]">
            <LinkedinIcon className="w-6 h-6" />
          </button>
          <button className="p-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-btn-blue hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]">
            <PhoneIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Resume />
    </section>
  );
}
