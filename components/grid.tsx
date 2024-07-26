import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Skeleton = () => (
   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
 );

export const gridItems = [
   {
      id: 1,
      title: "Advisorlink",
      description: "A Course Scheduler",
      header: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
      titleClassName: "justify-d",
      href: ""
   },
   {
      id: 2,
      title: "Game Library Web App",
      description: "A Game Website",
      header: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 text-center",
      titleClassName: "justify-start",
      href: "https://github.com/rehan-code/Game-Library-Web-App"
   },
   {
      id: 3,
      title: "AlphaToe",
      description: "A TicTacToe AI",
      header: "",
      className: "lg:col-span-1 md:col-span-2 md:row-span-2 text-center",
   },
   {
      id: 4,
      title: "Student Database Handler",
      description: "Java Program",
      header: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
      titleClassName: "justify-start",
      href: ""
   },
   {
      id: 4,
      title: "Binary Tree",
      description: "Linked List",
      header: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
      titleClassName: "justify-start",
      href: ""
   },


]

const Grid = () => {
  return (
    <section id="about">
      <div className="font-extrabold text-5xl pt-32 px-12">Projects</div>
      <BentoGrid className="max-w-[70rem] pt-10 pb-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
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