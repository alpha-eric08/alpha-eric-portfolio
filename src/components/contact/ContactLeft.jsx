import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/image/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Owusu-Ansah Eric</h3>
        <p className="text-lg font-normal text-gray-400">
         Frontend Developer || React.js, Tailwind CSS & Firebase || Javascript || Open to Mentorship & Project Collaborations|| IOT Enthusiast || AI Enthusiast
        </p>
        {/* <p className="text-base text-gray-400 tracking-wide">
          Passionate about building responsive, user-friendly, and scalable web
          applications. Experienced with React, Tailwind CSS, Firebase, and always
          eager to learn new technologies.
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+233 55 413 9957</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">owusuansaheric08@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          {/* <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="bannerIcon">
            <FaFacebookF />
          </a> */}
          <a href="https://www.linkedin.com/in/eric-owusu-ansah-0365682b3/" target="_blank" rel="noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/alpha-eric08" target="_blank" rel="noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
