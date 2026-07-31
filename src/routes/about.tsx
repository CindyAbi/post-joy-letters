import { createFileRoute } from "@tanstack/react-router";
import { PenLine, Heart, Leaf } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Monthly Letter" },
      { name: "description", content: "Why we started The Monthly Letter: a simple, friendly letter by post, filled with community, creativity, and connection." },
      { property: "og:title", content: "About — The Monthly Letter" },
      { property: "og:description", content: "Why we started The Monthly Letter: a simple, friendly letter by post, filled with community, creativity, and connection." },
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
          I created Joyful Mail to bring my personal mission to life: building community, sparking creativity, and cultivating genuine human connection. This journey is about deepening our relationships—becoming more mindful and more caring toward everyone around us, from close family and friends to everyday strangers.
        </p>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
          My heart is set on inspiring you to explore new creative activities, discover artistic expressions in ways you may never have expected, and—through that ripple effect—slow down and appreciate the community around you.
        </p>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
          By nurturing these bonds, we can step away from a digital‑heavy world and return to meaningful, physical spaces. My hope is that Joyful Mail brings joy to your mailbox each month, delivering a tangible letter, a small surprise, and an original artistic creation you’ll look forward to.
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
          icon={<Heart className="text-primary" aria-hidden="true" />}
          title="Community, creativity, and connection"
          paragraphs={[
            "Each letter is an invitation to slow down, make something with your hands, and see the world a little more closely. We share prompts and ideas that nudge you toward creative activities you may never have tried.",
            "At the same time, we want every envelope to strengthen bonds—with family, friends, neighbours, and even the stranger you smile at on the footpath. Small acts of care ripple outward.",
          ]}
        />

        <AboutBlock
          icon={<Leaf className="text-primary" aria-hidden="true" />}
          title="Made with love"
          paragraphs={[
            "Each envelope is put together by hand, with care, attention, and a genuine wish to brighten your day.",
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
