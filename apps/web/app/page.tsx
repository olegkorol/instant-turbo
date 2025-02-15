import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-24">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-foreground">
          Welcome to Your Next.js App
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          This is a starter template built with Turborepo, Next.js, and
          InstantDB. Get started by editing this page in{" "}
          <code>apps/web/app/page.tsx</code>.
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <div className="flex flex-col gap-2">
            <p>
              <code>/dashboard</code> is a protected page, where a user can
              manage a todo list after logging in.
            </p>
            <Link
              href="/dashboard"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Dashboard
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <p>
              The <code>/server-example</code> page shows how to use a
              server-side InstantDB client.
            </p>
            <Link
              href="/server-example"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Server Example
            </Link>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href="https://nextjs.org/docs"
            className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
          <a
            href="https://www.instantdb.com/docs"
            className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            InstantDB Docs
          </a>
          <a
            href="https://turbo.build/repo/docs"
            className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Turborepo Docs
          </a>
        </div>
      </div>
    </main>
  );
}
