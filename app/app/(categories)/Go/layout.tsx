import Link from "next/link";

export default function GoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">

            <header className="border-b">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                    <Link
                        href="/Go"
                        className="text-2xl font-bold"
                    >
                        Go
                    </Link>

                    <nav className="flex gap-5 text-sm">
                        <Link href="/Go">Home</Link>
                        <Link href="/Go/basics">Basics</Link>
                        <Link href="/Go/variables">Variables</Link>
                        <Link href="/Go/functions">Functions</Link>
                        <Link href="/Go/arrays">Arrays</Link>
                        <Link href="/Go/structs">Structs</Link>
                        <Link href="/Go/interfaces">Interfaces</Link>
                        <Link href="/Go/concurrency">Concurrency</Link>
                        <Link href="/Go/http">HTTP</Link>
                    </nav>

                </div>
            </header>

            <div className="mx-auto flex max-w-7xl">

                <aside className="hidden w-56 shrink-0 border-r p-6 md:block">
                    <p className="mb-4 text-sm font-semibold">
                        GO
                    </p>

                    <div className="flex flex-col gap-3 text-sm">

                        <Link href="/Go">
                            Overview
                        </Link>

                        <Link href="/Go/basics">
                            Basics
                        </Link>

                        <Link href="/Go/variables">
                            Variables & Types
                        </Link>

                        <Link href="/Go/functions">
                            Functions
                        </Link>

                        <Link href="/Go/arrays">
                            Arrays & Slices
                        </Link>

                        <Link href="/Go/structs">
                            Structs
                        </Link>

                        <Link href="/Go/interfaces">
                            Interfaces
                        </Link>

                        <Link href="/Go/errors">
                            Error Handling
                        </Link>

                        <Link href="/Go/concurrency">
                            Goroutines & Channels
                        </Link>

                        <Link href="/Go/http">
                            HTTP
                        </Link>

                        <Link href="/Go/database">
                            Databases
                        </Link>

                    </div>
                </aside>

                <main className="min-w-0 flex-1 px-6 py-10">
                    {children}
                </main>

            </div>

        </div>
    );
}