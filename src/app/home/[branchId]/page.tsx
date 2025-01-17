import { StudentList } from "@/components/StudentList";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function BranchPage({
  params,
}: {
  params: Promise<{ branchId: number }>;
}) {
  const supabase = await createClient();

  const branchId = (await params).branchId;

  console.log({ branchId });

  // Fetch students for the branch
  const { data: students, error } = await supabase
    .from("students")
    .select("*")
    .eq("branch_id", branchId);

  if (error) {
    console.error("Error fetching students:", error);
    console.log(error);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Branch {branchId} Students
      </h1>
      {students && students.length > 0 ? (
        <StudentList students={students ?? []} />
      ) : (
        <p className="text-center">No students found for this branch.</p>
      )}
      <Button className="w-full">Add New Child</Button>
      {/* Modal handling can be implemented here */}
    </div>
  );
}
