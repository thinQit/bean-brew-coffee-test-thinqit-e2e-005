import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-heading text-4xl text-[var(--destructive)]">
        Page not found
      </h1>
      <p className="mt-3 text-[var(--muted-foreground)]">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-[var(--primary)] px-5 py-3 text-white"
      >
        Back to home
      </Link>
    </div>
  );
}
