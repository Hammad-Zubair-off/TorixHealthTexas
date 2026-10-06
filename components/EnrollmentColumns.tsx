import { Container, Kicker, Section } from "@/components/Container";

export type EnrollmentColumn = {
  title: string;
  payers?: string;
  items: Array<{ title: string; description: string }>;
};

type PayerPrompt = {
  heading: string;
  payers: string[];
};

type EnrollmentColumnsProps = {
  kicker?: string;
  heading: string;
  subheading?: string;
  columns: EnrollmentColumn[];
  payerPrompt?: PayerPrompt;
};

export function EnrollmentColumns({
  kicker,
  heading,
  subheading,
  columns,
  payerPrompt,
}: EnrollmentColumnsProps) {
  return (
    <Section band="tint">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        {kicker ? <Kicker className="mb-3 text-accent">{kicker}</Kicker> : null}
        <h2 className="mb-3 max-w-[32ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mb-10 max-w-[64ch] text-[15px] text-neutral-600">
            {subheading}
          </p>
        ) : (
          <div className="mb-10" />
        )}

        <div className="grid gap-px bg-divider border border-divider lg:grid-cols-3">
          {columns.map((column, colIndex) => (
            <div key={column.title} className="flex flex-col bg-band-paper p-6">
              <span className="mb-3 font-[family-name:var(--font-heading)] text-[13px] font-semibold uppercase tracking-[0.08em] text-neutral-400">
                {String(colIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-1 text-[18px] normal-case text-text">{column.title}</h3>
              {column.payers ? (
                <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.08em] text-accent-700">
                  {column.payers}
                </p>
              ) : (
                <div className="mb-5" />
              )}
              <ul className="m-0 flex list-none flex-col gap-0 p-0">
                {column.items.map((item) => (
                  <li key={item.title} className="border-t border-divider py-4 first:border-t-0 first:pt-0">
                    <p className="mb-1 text-[14px] font-semibold normal-case text-text">
                      {item.title}
                    </p>
                    <p className="text-[13px] normal-case leading-[1.55] text-neutral-600">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {payerPrompt ? (
          <div className="mt-10 border border-divider bg-band-paper p-6">
            <h3 className="mb-4 text-[18px] normal-case text-text">{payerPrompt.heading}</h3>
            <ul className="m-0 flex list-none flex-wrap gap-px bg-divider border border-divider p-0">
              {payerPrompt.payers.map((payer) => (
                <li
                  key={payer}
                  className="bg-bg px-4 py-1.5 text-[13px] font-medium normal-case text-text"
                >
                  {payer}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
