import { redirect } from "next/navigation";
import { BranchList } from "@/components/BranchList";
import { withAuth } from "@workos-inc/authkit-nextjs";
import { createClient } from "@/utils/supabase/server";

export default async function HomePage() {
  const { user } = await withAuth();
  const supabase = await createClient();

  if (!user) {
    redirect("/");
  }

  const { data } = await supabase.from("branches").select("*");

  console.log(data);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">Tadika Branches</h1>
      <BranchList branches={data ?? []} />
    </div>
  );
}
