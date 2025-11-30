// app/page.tsx
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <a href="/api/auth/signin">Sign in with GitHub</a>
    );
  }

  return (
    <div>
      <p>{session.user?.name}</p>
      <img src={session.user?.image || ""} alt="avatar" width={50} height={50} />
      <br />
      <a href="/api/auth/signout">Sign out</a>
    </div>
  );
}