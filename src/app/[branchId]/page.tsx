"use client";

import { use, useState } from "react";
import { StudentList } from "@/components/StudentList";
import { Button } from "@/components/ui/button";
import { AddChildModal } from "@/components/AddChildModal";
import { useParams } from "next/navigation";

const initialStudents = [
  {
    id: "1",
    name: "Ahmad bin Abdullah",
    age: 5,
    guardian: "Abdullah bin Ismail",
  },
  {
    id: "2",
    name: "Siti Nurul binti Hassan",
    age: 4,
    guardian: "Hassan bin Omar",
  },
  { id: "3", name: "Raj Kumar a/l Muthu", age: 6, guardian: "Muthu a/l Rajan" },
];

export default function BranchPage() {
  const params = useParams<{ branchId: string }>();

  const [students, setStudents] = useState(initialStudents);
  const [showAddChildModal, setShowAddChildModal] = useState(false);

  const handleAddChild = (
    childName: string,
    childAge: number,
    guardianName: string,
  ) => {
    const newChild = {
      id: (students.length + 1).toString(),
      name: childName,
      age: childAge,
      guardian: guardianName,
    };
    setStudents([...students, newChild]);
    setShowAddChildModal(false);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Branch {params.branchId} Students
      </h1>
      <StudentList students={students} />
      <Button onClick={() => setShowAddChildModal(true)} className="w-full">
        Add New Child
      </Button>
      {showAddChildModal && (
        <AddChildModal
          onClose={() => setShowAddChildModal(false)}
          onSubmit={handleAddChild}
        />
      )}
    </div>
  );
}
