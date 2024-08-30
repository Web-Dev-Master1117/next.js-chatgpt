import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import GithubButton from "@/components/Buttons/GithubButton";

export default async function Home() {
  const session = (await getServerSession()) || {};
  if (Object.keys(session).length !== 0) {
    redirect("/playground");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-8 lg:p-24">
      <GithubButton />
    </main>
  );
}
