import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont w-full flex-col lgl:flex-row lgl:gap-20 flex gap"
    >
      {/* Part One - Academic & Project Achievements */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Academic & Project Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fuel Station Management System"
            subTitle="Personal Project — (2024)"
            result="Completed"
            des="Developed a management system for tracking fuel inventory, sales, and orders. Integrated React, Tailwind CSS, and Firebase for real-time insights."
          />
          <ResumeCard
            title="Inventory Management System"
            subTitle="Personal Project — (2024)"
            result="Completed"
            des="Built a retail inventory system with CRUD operations and role-based access control. Designed with scalability and real-time data sync using Firebase."
          />
          <ResumeCard
            title="EEK Consults & Electricals Ltd Website"
            subTitle="Freelance Project — (2024)"
            result="Client Project"
            des="Designed and developed a responsive static website for an electrical company, ensuring a clean, professional, and user-friendly UI."
          />
        </div>
      </div>

      {/* Part Two - Training, Teaching & Leadership Achievements */}
      <div>
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Training & Leadership Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Robotics & Arduino Training"
            subTitle="Clubbridge — (2023 - Present)"
            result="Trainer"
            des="Trained kids in robotics and Arduino, guiding them to build creative STEM-based projects and introducing them to programming logic."
          />
          <ResumeCard
            title="STEM Educator"
            subTitle="Kingdom Haven Model School — (2023 - Present)"
            result="Tutor"
            des="Teach STEM subjects to school children, making learning interactive through coding, electronics, and practical problem-solving activities."
          />
          <ResumeCard
            title="Founder - Cold with Alpha"
            subTitle="Online Coding Brand — (2024 - Present)"
            result="Mentor"
            des="Created an online platform to mentor and guide students in coding, software development, and real-world projects, sharing my journey and resources."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
