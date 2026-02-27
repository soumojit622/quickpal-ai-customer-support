import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App!</h1>
      <p className="text-lg mb-6">
        This is a simple Next.js application with Tailwind CSS and a custom Button component.
      </p>
      <Button>Click Me</Button>
      <div className="mt-6">
        <Image
          src="/logo.svg"
          alt="Next.js Logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
