import { Link } from "@tanstack/react-router";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/how-it-works", label: "How it Works" },
  { to: "/join", label: "Join" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-heading text-2xl font-semibold text-foreground">
              The Monthly Letter
            </p>
            <p className="mt-2 max-w-md text-lg text-muted-foreground">
              A little paper joy, delivered to your door every month.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} The Monthly Letter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
