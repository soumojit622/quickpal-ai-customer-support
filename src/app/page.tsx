import HomeClient from "@/components/home-client";
import { getSession } from "@/lib/getSession";

export default async function Home() {
  const session = await getSession()

  return (
    <>
      <HomeClient email={session?.user?.email || null} />
    </>
  );
}
