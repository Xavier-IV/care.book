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
  const signUpUrl = await getSignUpUrl();

  if (user) {
    redirect("/home");
  }

  return (
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to Tadika Management</h1>
      <p>Please sign in or sign up to continue.</p>
      <div className="space-x-4">
        <Link href={signInUrl}>
          <button className="btn-primary">Sign In</button>
        </Link>
        <Link href={signUpUrl}>
          <button className="btn-primary">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
