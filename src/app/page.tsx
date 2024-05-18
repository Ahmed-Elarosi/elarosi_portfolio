import Image from "next/image";
import { DiProlog } from "react-icons/di";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* {" "}
            <Image
              src="/sh.svg"
              alt="my Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}

          <DiProlog size="3rem" />
          </a>
        </div>
      </div>
    </main>
  );
}

