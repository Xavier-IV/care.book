import { createClient } from "@/utils/supabase/server";
import { LanyardCard } from "./LanyardCard";

export default async function StudentPage({
  params,
}: {
  params: { uuid: string };
}) {
  const supabase = await createClient();

  const { data: student, error } = await supabase
    .from("students")
    .select("name, age, guardian, branch_id, customer_id, branches(name)")
    .eq("uuid", params.uuid)
    .single();

  if (error || !student) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-800">Student not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <LanyardCard
        name={student.name}
        guardian={student.guardian}
        branch={student.branches?.name ?? ""}
        customerId={student.customer_id ?? ""}
      />
    </div>
  );
}
