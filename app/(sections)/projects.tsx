import ImportantProject from "@/components/highlighted-project";
import PageContainer from "@/components/layout/page-container";
import Section from "@/components/layout/section";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  return (
    <Section id="projects">
      <PageContainer>
        <ImportantProject />
        {/* <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 8 }).map((item) => (
            <ProjectCard />
          ))}
        </div> */}
        {/* load more on click? */}
      </PageContainer>
    </Section>
  );
}
