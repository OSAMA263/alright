import ImportantProject from "@/components/highlighted-project";
import PageContainer from "@/components/layout/page-container";
import Section from "@/components/layout/section";
import ProjectCard from "@/components/project-card";
import SectionTitle from "@/components/ui/section-title";
import { IMPORTANT_PROJECTS, OTHER_PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" className="pt-30">
      <PageContainer>
        <SectionTitle number={3} title="projects" />

        {/* HIGHLIGHTED PROJECTS */}
        <div className="space-y-30">
          {IMPORTANT_PROJECTS.map((project) => (
            <ImportantProject {...project} key={project.title} />
          ))}
        </div>

        {/* MORE PROJECTS */}
        <div className="space-y-10 mt-31">
          <h2 className="text-center text-2xl">Other Projects</h2>
          <div className="grid grid-cols-3 gap-4">
            {OTHER_PROJECTS.map((project) => (
              <ProjectCard {...project} key={project.title} />
            ))}
          </div>
          {/* btn to load more */}
        </div>
      </PageContainer>
    </Section>
  );
}
