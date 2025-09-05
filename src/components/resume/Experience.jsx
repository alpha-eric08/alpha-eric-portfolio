import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One - Job / Attachment Experience */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job & Attachment Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Industrial Attachment"
            subTitle="Uvitech — (2023)"
            result="Kumasi"
            des="Completed industrial attachment, gaining practical experience in IT systems and hands-on exposure to software and technology solutions."
          />
          <ResumeCard
            title="Industrial Attachment"
            subTitle="EEK Consults And Electricals Ltd — (2024)"
            result="Kumasi"
            des="Worked as an intern, where I designed and developed a responsive company website using React and Tailwind CSS."
          />
        </div>
      </div>

      {/* Part Two - Training & Teaching Experience */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Training & Teaching Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Robotics & Arduino Trainer"
            subTitle="Clubbridge — (2023 - Present)"
            result="Kumasi"
            des="Train students in robotics and Arduino, guiding kids to build innovative STEM-based projects and encouraging problem-solving skills."
          />
          <ResumeCard
            title="STEM Tutor"
            subTitle="Kingdom Haven Model School — (2023 - Present)"
            result="Abuakwa Maakro"
            des="Teach STEM subjects to school children, making learning fun and practical through experiments, coding, and interactive projects."
          />
          <ResumeCard
            title="Founder & Online Instructor"
            subTitle="Cold with Alpha — (2024 - Present)"
            result="Online"
            des="Run an online coding and mentoring brand, where I guide students in programming, share resources, and build projects for real-world learning."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
