import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Intro from "@/components/intro";
import { links } from "@/lib/data";
import Grid from "@/components/grid";
import { LeftSocials } from "@/components/LeftSocials";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="">
        <FloatingNav navItems={links} />
        <Intro />
        <Grid />
        <LeftSocials />
      </div>
    </main>
  );
}
