"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  stack: string[];
  link?: string;
}

export const experience = [
  {
    company: "CitySwipe",
    role: "Software Engineer",
    startDate: "Jul 2024",
    endDate: "Oct 2024",
    description: [
      "Developed a full-stack app to help users find vacation spots powered by Next.js & supabase, with a team of 3",
      "Won first place at Headstarter 2024 Hackathon out of 550 participants and pushed the app to launch",
      "Tuned Gemini Model to create an immersive chat & provide tailored destinations",
    ],
    stack: ["Typescript", "Next.js", "Gemini", "SQL", "Supabase"],
    link: "https://www.cityswipe.app/",
  },
  {
    company: "GBADs (Global Burden of Animal Diseases)",
    role: "Data Analyst / Software Engineer",
    startDate: "Jun 2021",
    endDate: "Apr 2024",
    description: [
      "Streamlined workflow optimization by orchestrating the integration of a Slack bot with an AWS-powered (S3, EC2) dashboard, automating real-time authorization of dashboard comments",
      "Mastered SQL database management, adeptly creating and handling 60+ complex tables with over 1000 rows each using Python and R scripts for seamless data access and efficient query execution",
      "Developed data reports and visually appealing web dashboards using Python (numpy, pandas, matplotlib, dash) and Shell scripting, empowering data-driven decision-making through analysis of animal data from 2003 to 2020",
    ],
    stack: ["Python", "AWS", "R", "SQL", "Typescript"],
    link: "https://animalhealthmetrics.org/",
  },
  {
    company: "Yurmo",
    role: "Software Engineer",
    startDate: "May 2022",
    endDate: "Dec 2023",
    description: [
      "Led the end-to-end software development life cycle in sprints, from ideation to the launch of the Flutter app, by effectively managing teams, aligning the product with market needs, and conducting unit testing",
      "Designed a user-appealing website with extensive user testing and Figma, and led development using Next.js for a seamless, responsive experience",
      "Implemented Supabase SSO for seamless and secure user authentication (OAuth), enhancing user experience and security",
    ],
    stack: ["Flutter", "Next.js", "Supabase", "Figma", "Git"],
    // link: "https://yurmo.com/",
  },
  {
    company: "Kenna",
    role: "Web Application Developer",
    startDate: "Oct 2021",
    endDate: "Dec 2021",
    description: [
      "Implemented new features and enhanced full-stack website functionality using ReactJS, JavaScript, and NodeJS, effectively managing the back-end SQL server database to optimize user experience and website performance",
      "Collaborated cross-functionally in weekly sprints, leveraging the JIRA ticketing system to efficiently complete tasks and enhance functionality in 30+ page web apps based on client requests",
      "Executed search engine optimization strategies to enhance the visibility and performance of client websites",
    ],
    stack: ["ReactJS", "JavaScript", "NodeJS", "SQL", "Git"],
    link: "https://www.kenna.ca/",
  },
];

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set new timeout to mark scrolling as finished after 150ms
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="pt-24 sm:pt-16 pb-4">
      <h2 className="font-extrabold text-4xl sm:text-5xl pb-10 px-12">
        Experience
      </h2>
      <div className="space-y-6">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="pb-8"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {item.company}
                  </a>
                </div>
                <p className="text-muted-foreground mt-1 md:mt-0">
                  {item.startDate} - {item.endDate}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-white/10 text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial="hidden"
              animate={!isScrolling && hoveredIndex === index ? "visible" : "hidden"}
              variants={{
                visible: { height: "auto", opacity: 1 },
                hidden: { height: 0, opacity: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ overflow: "hidden", marginTop: 16 }}
            >
              <ul className="list-disc space-y-2 max-w-5xl pl-6">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-muted-foreground">
                    <span className="whitespace-normal break-words -ml-1 pl-1 block">
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
