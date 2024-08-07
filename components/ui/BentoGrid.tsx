import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        //   "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  id,
  titleClassName,
  stack,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  id: number;
  titleClassName?: string;
  stack?: string;
  href?: string;
}) => {
  return (
    <a
      className={cn(
        //   "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border-2 border-black/[0.1] dark:border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      href={href}
    >
      {header}
      <div
        // className="group-hover/bento:translate-x-2 transition duration-200"
        className={cn(
          // titleClassName,
          "h-full group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
        {/* <div className=" font-sans font-extralight md:max-w-40 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 text-center">
          {description}
        </div> */}
        {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
        {/* remove mb-2 mt-2 */}
        <div
          className={`font-sans text-lg lg:text-2xl max-w-96 font-bold z-10`}
        >
          {title}
        </div>
        
        <div className="absolute bottom-0 pb-5 text-start font-sans font-thin tracking-wider md:max-w-80 md:text-xs lg:text-sm text-sm text-neutral-900 dark:text-[#c1c2d3b1] z-10">
          {stack}
        </div>
      </div>
    </a>
  );
};
