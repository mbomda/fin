import Image from "next/image";
import Carousel from "./carousel/carousel";
import Section from "./section/page";
import Background from "./background/page";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <Background />
      <ProjectsSection />
      <Section />
      <Carousel />
    </main>
  );
}
