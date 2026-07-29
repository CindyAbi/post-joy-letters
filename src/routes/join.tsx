import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join — The Monthly Letter" },
      { name: "description", content: "Choose a monthly or yearly subscription to The Monthly Letter. A friendly letter delivered to your door every month for readers over 60." },
      { property: "og:title", content: "Join — The Monthly Letter" },
      { property: "og:description", content: "Choose a monthly or yearly subscription to The Monthly Letter. A friendly letter delivered to your door every month for readers over 60." },
    ],
  }),
  component: JoinPage,
});

function JoinPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          Join The Monthly Letter
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
          Choose the plan that suits you. Every subscription includes one letter a month, posted to your door.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <PricingCard
          name="Monthly"
          price="AUD $14"
          period="per month"
          description="Perfect if you want to try it out first."
          features={[
            "One letter every month",
            "Posted by Royal Mail",
            "Cancel anytime",
            "Readable, large-print design",
          ]}
          cta="Subscribe monthly"
          highlighted={false}
        />
        <PricingCard
          name="Yearly"
          price="AUD $120"
          period="per year"
          description="Save $48 over the year and one less thing to remember."
          features={[
            "One letter every month",
            "Posted by Royal Mail",
            "Pause or cancel anytime",
            "Readable, large-print design",
            "Save $48 over the year",
          ]}
          cta="Subscribe yearly"
          highlighted={true}
        />
      </div>

      <div className="mt-16 rounded-2xl bg-muted p-8 md:p-12">
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
          What happens next?
        </h2>
        <ol className="mt-6 space-y-4 text-lg text-muted-foreground">
          <li>1. You fill in your address and payment details.</li>
          <li>2. We prepare your first letter and post it within a few working days.</li>
          <li>3. Each month after that, a new letter arrives through your letterbox.</li>
        </ol>
        <p className="mt-6 text-lg text-muted-foreground">
          If you ever need to pause, change address, or cancel, just email or phone us and we will sort it out.
        </p>
      </div>

      <div className="mt-8 rounded-2xl bg-card p-8 text-center shadow-sm ring-1 ring-border md:p-12">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <Sparkles aria-hidden="true" />
        </div>
        <h2 className="mt-4 font-heading text-2xl font-bold text-foreground">
          A thoughtful gift
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
          You can also give The Monthly Letter as a gift. We will include a handwritten note with the first letter so the recipient knows who it is from.
        </p>
        <div className="mt-6">
          <Button size="lg" variant="outline">
            Gift a subscription
          </Button>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 shadow-sm ring-2 md:p-10 ${
        highlighted
          ? "bg-primary text-primary-foreground ring-primary"
          : "bg-card text-foreground ring-border"
      }`}
    >
      <h3 className="font-heading text-2xl font-bold">{name}</h3>
      <p className="mt-2 text-lg opacity-90">{description}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-heading text-5xl font-bold">{price}</span>
        <span className={`text-lg ${highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {period}
        </span>
      </div>
      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-lg">
            <Check
              className={`mt-1 shrink-0 ${
                highlighted ? "text-primary-foreground" : "text-primary"
              }`}
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Button
          className="w-full"
          size="lg"
          variant={highlighted ? "secondary" : "default"}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
}
