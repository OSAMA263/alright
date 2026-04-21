import ImportantProject from "@/components/highlighted-project";
import PageContainer from "@/components/layout/page-container";
import Section from "@/components/layout/section";
import OtherProjects from "@/components/other-projects";
import SectionTitle from "@/components/ui/section-title";
import { IMPORTANT_PROJECTS } from "@/data/projects";

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
          <OtherProjects />
        </div>
      </PageContainer>
    </Section>
  );
}
