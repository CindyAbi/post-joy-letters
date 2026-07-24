import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Printer, Mail, Smile, Pause, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — The Monthly Letter" },
      { name: "description", content: "Simple steps to start receiving a monthly letter by post. Choose a plan, we write and post it, and you enjoy the read." },
      { property: "og:title", content: "How It Works — The Monthly Letter" },
      { property: "og:description", content: "Simple steps to start receiving a monthly letter by post. Choose a plan, we write and post it, and you enjoy the read." },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          How it works
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
          From choosing a plan to opening your first letter, everything is designed to be simple and calm.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <StepDetail
          number="1"
          icon={<Calendar className="text-primary" aria-hidden="true" />}
          title="Pick a plan"
          description="Choose a monthly or yearly subscription. Yearly plans save a little and mean fewer things to think about."
        />
        <StepDetail
          number="2"
          icon={<Printer className="text-primary" aria-hidden="true" />}
          title="We write & print"
          description="Each month we write a new letter, design it for easy reading, and print it on quality paper."
        />
        <StepDetail
          number="3"
          icon={<Mail className="text-primary" aria-hidden="true" />}
          title="Posted to your door"
          description="We fold it, seal it in an envelope, and send it through the post. No apps, no passwords."
        />
        <StepDetail
          number="4"
          icon={<Smile className="text-primary" aria-hidden="true" />}
          title="Read at your pace"
          description="Keep it, share it, or re-read it. Each letter is yours to enjoy however you like."
        />
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <InfoCard
          icon={<Pause className="text-primary" aria-hidden="true" />}
          title="Pause or cancel anytime"
          description="Going away? Need a break? You can pause or cancel your subscription easily. No hard feelings."
        />
        <InfoCard
          icon={<HelpCircle className="text-primary" aria-hidden="true" />}
          title="Questions?"
          description="If you ever need help, you can phone or email us and a real person will get back to you."
        />
      </div>

      <div className="mt-16 rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
        <h2 className="font-heading text-3xl font-bold">
          Your first letter is waiting
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg">
          Sign up today and we will put your first letter in the post within a few working days.
        </p>
        <div className="mt-8">
          <Link to="/join">
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Choose a plan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function StepDetail({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-card p-8 shadow-sm ring-1 ring-border">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
          {icon}
        </div>
        <span className="font-heading text-3xl font-bold text-primary">{number}</span>
      </div>
      <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-muted p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card">
        {icon}
      </div>
      <div>
        <h3 className="font-heading text-2xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
