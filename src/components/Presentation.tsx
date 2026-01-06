import GithubIcon from "../assets/icons/github.svg?react";
import EmailIcon from "../assets/icons/email.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";

export default function Presentation() {
  return (
    <section className="component-wrapper flex flex-col items-center text-center gap-6 px-8">
      <img
        src="/foto-intro.jpg"
        alt="Profile image"
        width={200}
        className="rounded-full object-cover"
      />
      <p className="max-w-2xl text-xl">
        En <strong>webudviklere</strong> fra Danmark, Aarhus. 📍 <br /> Lad os
        arbejde sammen!
      </p>
      <div className="flex gap-8 bg-white px-6 py-4 rounded-full">
        <button className="hover:bg-btn-blue">
          <GithubIcon className="w-6 h-6" />
        </button>
        <button>
          <EmailIcon className="w-6 h-6" />
        </button>
        <button>
          <LinkedinIcon className="w-6 h-6" />
        </button>
        <button>
          <PhoneIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
