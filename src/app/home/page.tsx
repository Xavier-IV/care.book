import { BranchList } from "@/components/BranchList";
import { StudentsLayer } from "./StudentsLayer";
import { redirect } from "next/navigation";
import { withAuth } from "@workos-inc/authkit-nextjs";
import { createClient } from "@/utils/supabase/server";
import { Tables } from "@/types/database.type";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const branchId = (await searchParams).branchId;
  const { user } = await withAuth();
  const supabase = await createClient();

  if (!user) {
    redirect("/");
  }

  const { data: branches } = await supabase.from("branches").select("*");

  let students: Tables<"students">[] = [];
  let branchName = "";

  if (branchId) {
    // Fetch students for the branch
    const { data: studentData, error: studentError } = await supabase
      .from("students")
      .select("*")
      .order("name", { ascending: true })
      .eq("branch_id", Number(branchId));

    if (studentError) {
      console.error("Error fetching students:", studentError);
    } else {
      students = studentData ?? [];
    }

    // Fetch the branch name
    const { data: branchData, error: branchError } = await supabase
      .from("branches")
      .select("name")
      .eq("id", Number(branchId))
      .single();

    if (branchError) {
      console.error("Error fetching branch name:", branchError);
    } else {
      branchName = branchData?.name || "";
    }
  }

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center mb-6">Branches</h1>

      {/* Branch List */}
      <div className={`transition ${branchId ? "blur-sm" : ""}`}>
        <BranchList branches={branches ?? []} />
      </div>

      {/* Students Layer */}
      {branchId && (
        <div className="fixed inset-0 w-screen h-screen bg-gray-400/50 backdrop-blur-md flex items-center justify-center">
          <StudentsLayer branchName={branchName} students={students} />
        </div>
      )}
    </div>
  );
}
