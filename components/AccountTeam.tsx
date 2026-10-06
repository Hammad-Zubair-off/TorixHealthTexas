import { Container, Section } from "@/components/Container";
import { TeamMemberCard, type MemberCard } from "@/components/TeamMemberCard";

type AccountTeamProps = {
  heading: string;
  subheading: string;
  members: MemberCard[];
};

export function AccountTeam({ heading, subheading, members }: AccountTeamProps) {
  return (
    <Section band="paper" className="border-b border-divider">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 max-w-[20ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        <p className="mb-8 max-w-[56ch] text-[15px] text-neutral-600">{subheading}</p>
        <ul className="m-0 grid list-none gap-6 p-0 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          {members.map((member) => (
            <li key={`${member.role}-${member.name}`}>
              <TeamMemberCard {...member} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
