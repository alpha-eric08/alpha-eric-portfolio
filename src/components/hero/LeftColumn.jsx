import { FaFacebookF, FaLinkedinIn, FaReact, FaTwitter } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiTypescript } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftColumn = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "Front-End Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Owusu-A. Eric</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          A passionate Front-End Developer dedicated to transforming ideas into
          immersive, user-friendly web experiences. With a blend of creativity
          and technical expertise, I build responsive, high-performance websites
          and web apps that look great and feel even better.
        </p>
      </div>

      {/* Media */}
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-10 justify-between">
        {/* Reach Me */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-3">
            <a className="bannerIcon" href="#">
              <FaFacebookF />
            </a>
            <a className="bannerIcon" href="#">
              <FaTwitter />
            </a>
            <a
              className="bannerIcon"
              href="https://www.linkedin.com/in/eric-owusu-ansah-0365682b3/"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* skills */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFirebase />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
