import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Tables } from "@/types/database.type";

interface BranchListProps {
  branches: Tables<"branches">[];
}

export function BranchList({ branches }: BranchListProps) {
  return (
    <Card className="overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {branches.map((branch) => (
          <li key={branch.id}>
            <Link
              href={`/home/${branch.id}`}
              className="block px-4 py-3 hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              {branch.name}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
