import { redirect } from "next/navigation";
import Link from "next/link";
import {
  getSignInUrl,
  getSignUpUrl,
  withAuth,
} from "@workos-inc/authkit-nextjs";

export default async function HomePage() {
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();

  if (user) {
    redirect("/home");
  }

  return (
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to Tadika Management</h1>
      <p>Please sign in or sign up to continue.</p>
      <div className="space-x-4 pt-4">
        <Link
          href={signInUrl}
          className="px-4 py-2 rounded-md bg-black text-white mt-4"
        >
          <button className="btn-primary">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
