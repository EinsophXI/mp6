import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <a href="/api/auth/signin/github">Sign in with GitHub</a>
    );
  }

  return (
    <div>
      <p>{session.user?.name}</p>
      <img src={session.user?.image || ""} width={50} />
      <a href="/api/auth/signout">Sign out</a>
    </div>
  );
}