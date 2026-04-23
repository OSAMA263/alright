import ExpSection from "@/components/experience-row";
import PageContainer from "@/components/layout/page-container";
import Section from "@/components/layout/section";
import SectionTitle from "@/components/ui/section-title";
import { EXP } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" className="bg-dark">
      <PageContainer className="xl:w-[65%]!">
        <SectionTitle title="experience" number={2} />

        <div className="space-y-4">
          {EXP.map((data, i) => (
            <ExpSection {...data} ind={i} key={i} />
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}