import { FloatingNav } from "@/components/floatingNavbar";
import { links } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={links} />
        <h1>Hey, Im Rehan Nagoor Mohideen!</h1>

      </div>
    </main>
  );
}
