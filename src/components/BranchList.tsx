"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Tables } from "@/types/database.type";

interface BranchListProps {
  branches: Tables<"branches">[];
}

export function BranchList({ branches }: BranchListProps) {
  const router = useRouter();

  const handleBranchClick = (branchId: string) => {
    router.push(`/home?branchId=${branchId}`);
  };

  return (
    <Card className="overflow-hidden min-w-[400px]">
      <ul className="divide-y divide-gray-200">
        {branches.map((branch) => (
          <li key={branch.id}>
            <button
              onClick={() => handleBranchClick(branch.id.toString())}
              className="block w-full text-left px-4 py-3 hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              {branch.name}
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
