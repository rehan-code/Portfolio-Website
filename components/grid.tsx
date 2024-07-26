import { gridItems } from "@/lib/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="projects">
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
            href={item.href}
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