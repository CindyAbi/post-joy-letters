import { createFileRoute } from "@tanstack/react-router";
import { PenLine, Users, Leaf } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Monthly Letter" },
      { name: "description", content: "Why we started The Monthly Letter: a simple, friendly letter by post for readers over 60." },
      { property: "og:title", content: "About — The Monthly Letter" },
      { property: "og:description", content: "Why we started The Monthly Letter: a simple, friendly letter by post for readers over 60." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          About The Monthly Letter
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
          We believe a good letter is one of life's simple pleasures. Our mission is to bring that pleasure back to the people who appreciate it most.
        </p>
      </div>

      <div className="mt-16 space-y-12">
        <AboutBlock
          icon={<PenLine className="text-primary" aria-hidden="true" />}
          title="Why letters?"
          paragraphs={[
            "Letters have a way of slowing the day down. They do not blink, beep, or demand an immediate reply. You can read one over breakfast, keep it on the sideboard, or share it with a neighbour.",
            "We wanted to create something that feels personal, not digital. Something that arrives in the real world and stays in the real world.",
          ]}
        />

        <AboutBlock
          icon={<Users className="text-primary" aria-hidden="true" />}
          title="Written for readers over 60"
          paragraphs={[
            "We choose our words carefully and design our pages with readability in mind. That means clear type, generous spacing, and a warm tone that never talks down.",
            "Each letter is self-contained, so you can dip in without needing to follow a thread online. It is a complete little reading experience, from greeting to sign-off.",
          ]}
        />

        <AboutBlock
          icon={<Leaf className="text-primary" aria-hidden="true" />}
          title="Made gently"
          paragraphs={[
            "We print on recycled paper where possible, use minimal packaging, and post through Royal Mail — no couriers, no plastic, no fuss.",
            "Our letters are produced in small batches so we can keep the quality high and the waste low.",
          ]}
        />
      </div>

      <div className="mt-16 rounded-2xl bg-muted p-8 md:p-12">
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
          Our promise
        </h2>
        <ul className="mt-6 space-y-4 text-lg text-muted-foreground">
          <li>• One letter, every month, through your letterbox.</li>
          <li>• Readable, friendly writing you can enjoy at your own pace.</li>
          <li>• Cancel or pause whenever you need to.</li>
          <li>• A real person reads every message you send us.</li>
        </ul>
      </div>
    </div>
  );
}

function AboutBlock({
  icon,
  title,
  paragraphs,
}: {
  icon: React.ReactNode;
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:gap-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
        {icon}
      </div>
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          {title}
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
