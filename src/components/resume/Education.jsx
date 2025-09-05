import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One - Education */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc. Information Technology Education"
            subTitle="AAMUSTED, Kumasi — (2023 - Present)"
            result="Level 300"
            des="Pursuing a degree in Information Technology Education, focusing on software development, databases, and IT solutions for education and industry."
          />
          <ResumeCard
            title="WASSCE Certificate"
            subTitle="Adventist Senior High School, Kumasi — (2019 - 2022)"
            result="Completed"
            des="Completed senior secondary education with a focus on science and technology-related courses."
          />
          <ResumeCard
            title="Basic Education Certificate Examination"
            subTitle="Dominase SDA JHS, Bekwai — (2017 - 2019)"
            result="Completed"
            des="Completed basic education with strong foundations in mathematics, science, and technology."
          />
        </div>
      </div>

      {/* Part Two - Experience */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects & Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fuel Station Management System"
            subTitle="React, Tailwind CSS, Firebase — (2024)"
            result="Project"
            des="Developed a system to track inventory, sales, and orders for a filling station. Implemented a dashboard for real-time insights into station operations."
          />
          <ResumeCard
            title="Inventory Management System"
            subTitle="React & Firebase — (2024)"
            result="Project"
            des="Built a retail inventory management system with real-time data syncing, CRUD operations, and role-based access control."
          />
          <ResumeCard
            title="EEK Consults And Electricals Ltd Website"
            subTitle="React & Tailwind CSS — (2024)"
            result="Freelance"
            des="Designed and developed a responsive static website for an electrical services company with a clean, user-friendly UI."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
