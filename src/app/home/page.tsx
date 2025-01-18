import { BranchList } from "@/components/BranchList";
import { StudentsLayer } from "./StudentsLayer";
import { redirect } from "next/navigation";
import { withAuth } from "@workos-inc/authkit-nextjs";
import { createClient } from "@/utils/supabase/server";
import { Tables } from "@/types/database.type";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { branchId?: string };
}) {
  const branchId = (await searchParams).branchId;
  const { user } = await withAuth();
  const supabase = await createClient();

  if (!user) {
    redirect("/");
  }

  const { data: branches } = await supabase.from("branches").select("*");

  let students: Tables<"students">[] = [];
  if (branchId) {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("name", { ascending: true })
      .eq("branch_id", Number(branchId));

    if (error) {
      console.error("Error fetching students:", error);
    } else {
      students = data ?? [];
    }
  }

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center mb-6">Tadika Branches</h1>

      {/* Branch List */}
      <div className={`transition ${branchId ? "blur-sm" : ""}`}>
        <BranchList branches={branches ?? []} />
      </div>

      {/* Students Layer */}
      {branchId && (
        <div className="fixed inset-0 w-screen h-screen bg-gray-400/50 backdrop-blur-md flex items-center justify-center">
          <StudentsLayer branchId={branchId} students={students} />
        </div>
      )}
    </div>
  );
}
