import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Heart, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-letters.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Monthly Letter — Joyful Letters by Post" },
      { name: "description", content: "A monthly letter delivered by post, crafted for people over 60. Stories, conversation, and a little paper joy through your letterbox." },
      { property: "og:title", content: "The Monthly Letter — Joyful Letters by Post" },
      { property: "og:description", content: "A monthly letter delivered by post, crafted for people over 60. Stories, conversation, and a little paper joy through your letterbox." },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-lg font-semibold uppercase tracking-wider text-primary">
              For readers over 60
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              A little paper joy, once a month
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              The Monthly Letter is a friendly, handwritten-style letter sent to your door. Each month brings a new story, a thoughtful reflection, and a sense of connection — delivered by post, read at your own pace.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/join">
                <Button size="lg">Start receiving letters</Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline">
                  See how it works
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={heroImage}
              alt="A handwritten letter and envelope on a wooden table beside a cup of tea, reading glasses, and a small vase of wildflowers."
              width={1024}
              height={768}
              className="rounded-2xl border border-border shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Not a magazine. Not a bill. Just a letter.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              In a world of screens and notifications, there is something special about finding a real letter on your doormat. We write each month's letter like a note to a good friend — warm, unhurried, and full of small discoveries.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<BookOpen className="text-primary" aria-hidden="true" />}
              title="A good read"
              description="A new theme every month: history, nature, memory, place, and simple everyday joys."
            />
            <FeatureCard
              icon={<Mail className="text-primary" aria-hidden="true" />}
              title="Through your letterbox"
              description="Printed on quality paper, sealed in an envelope, and posted to arrive at home."
            />
            <FeatureCard
              icon={<Calendar className="text-primary" aria-hidden="true" />}
              title="Once a month"
              description="A gentle rhythm you can count on. No daily emails, no apps to check."
            />
            <FeatureCard
              icon={<Heart className="text-primary" aria-hidden="true" />}
              title="Made with care"
              description="Written with older readers in mind: clear type, generous spacing, and a friendly tone."
            />
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Three simple steps
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <StepCard
            number="1"
            title="Choose a plan"
            description="Pick a monthly or yearly subscription that suits you."
          />
          <StepCard
            number="2"
            title="We write & post"
            description="We print, fold, seal, and send your letter by post."
          />
          <StepCard
            number="3"
            title="Enjoy the read"
            description="Sit down with a cup of tea and read at your leisure."
          />
        </div>
        <div className="mt-12 text-center">
          <Link to="/how-it-works">
            <Button size="lg" variant="outline">
              Read the full details
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="font-heading text-2xl italic leading-relaxed md:text-3xl">
            "It reminds me of the letters my mother used to send. I look forward to it every month — it is the first thing I open."
          </blockquote>
          <p className="mt-6 text-lg font-medium">— Margaret, 74, Dorset</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="rounded-2xl bg-card p-8 text-center shadow-sm ring-1 ring-border md:p-16">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Ready for your first letter?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Join today and your first letter will be in the post within a few days. You can cancel or pause at any time.
          </p>
          <div className="mt-8">
            <Link to="/join">
              <Button size="lg">Join The Monthly Letter</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-border">
      <div className="inline-flex rounded-lg bg-muted p-3">{icon}</div>
      <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-lg text-muted-foreground">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-xl bg-card p-8 text-center shadow-sm ring-1 ring-border">
      <span className="font-heading text-4xl font-bold text-primary">{number}</span>
      <h3 className="mt-4 font-heading text-2xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-lg text-muted-foreground">{description}</p>
    </div>
  );
}
