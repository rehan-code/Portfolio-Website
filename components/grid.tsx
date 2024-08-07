// import { gridItems } from "@/lib/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export const gridItems = [
  {
    id: 2,
    title: "Game Library Web App",
    description: "A Game Website",
    header: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-2 text-center",
    titleClassName: "justify-start",
    stack: "HTML CSS Javascript PHP SQL Jest",
    href: "https://github.com/rehan-code/Game-Library-Web-App",
  },
  {
    id: 2,
    title: "Rentr",
    description: "A Renting Platform",
    header: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4 text-center",
    titleClassName: "justify-start",
    stack: "Flutter Supabase",
    href: "https://devpost.com/software/lendr-j4guw0?ref_content=my-projects-tab&ref_feature=my_projects",
  },
  {
    id: 1,
    title: "Advisorlink",
    description: "A Course Scheduler",
    header: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
    titleClassName: "justify-d",
    stack: "React.js Typescript Docker Python SQL Selenium",
    href: "https://github.com/rehan-code/Advisorlink",
  },
  {
    id: 3,
    title: "AlphaToe",
    description: "A TicTacToe AI",
    header: "",
    className: "lg:col-span-1 md:col-span-2 md:row-span-2 text-center",
    stack: "C",
    href: "https://github.com/rehan-code/Alphatoe",
  },
  {
    id: 2,
    title: "My Games Tracker",
    description: "Mobile App",
    header: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4 text-center",
    titleClassName: "justify-start",
    stack: "Flutter Firebase",
    href: "https://github.com/rehan-code/CIS4030",
  },
  {
    id: 4,
    title: "Student Database Handler",
    description: "Java Program",
    header: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
    titleClassName: "justify-start",
    stack: "Java",
    href: "https://github.com/rehan-code/Student-Database-Program",
  },
  {
    id: 4,
    title: "My Shell",
    description: "",
    header: "",
    className: "lg:col-span-1 md:col-span-2 md:row-span-4 text-center",
    titleClassName: "justify-start",
    stack: "C",
    href: "https://github.com/rehan-code/My-Shell",
  },
  {
    id: 4,
    title: "2D Platformer",
    description: "Unity",
    header: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
    titleClassName: "justify-start",
    href: "https://github.com/rehan-code/2D-unity-game",
  },
  {
    id: 4,
    title: "E-Store",
    description: "Library Handler",
    header: "",
    className: "lg:col-span-1 md:col-span-2 md:row-span-2 text-center",
    titleClassName: "justify-start",
    stack: "Java",
    href: "https://github.com/rehan-code/eStore-Program",
  },
  {
    id: 4,
    title: "Binary Tree",
    description: "Linked List",
    header: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
    titleClassName: "justify-start",
    stack: "C",
    href: "https://github.com/rehan-code/Binary-Tree-Handling-project",
  },
  {
    id: 4,
    title: "GPX Manager",
    description: "website",
    header: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
    titleClassName: "justify-start",
    stack: "HTML CSS Javascript C",
    href: "https://github.com/rehan-code/GPX-Manager",
  },
  //  {
  //    id: 4,
  //    title: "News Parser",
  //    description: "website",
  //    header: "",
  //    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
  //    titleClassName: "justify-start",
   //  stack: "HTML CSS Javascript RESTfull API",
    //    href: "https://github.com/rehan-code/News-Parser-Website",
  //  },
];

const Grid = () => {
  return (
    <section id="projects">
      <div className="font-extrabold text-4xl sm:text-5xl pt-24 sm:pt-32 px-12">Projects</div>
      <BentoGrid className="max-w-[70rem] pt-10 pb-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={i}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            href={item.href}
            stack={item.stack}
            // img={item.img}
            // imgClassName={item.imgClassName}
            // titleClassName={item.titleClassName}
            // spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
