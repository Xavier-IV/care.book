"use client";

import { useState } from "react";
import { BranchList } from "@/components/BranchList";
import { Button } from "@/components/ui/button";
import { AddBranchModal } from "@/components/AddBranchModal";

const initialBranches = [
  { id: "1", name: "Tadika Ceria Kuala Lumpur" },
  { id: "2", name: "Tadika Pintar Petaling Jaya" },
  { id: "3", name: "Tadika Cemerlang Subang Jaya" },
];

export default function Home() {
  const [branches, setBranches] = useState(initialBranches);
  const [showAddBranchModal, setShowAddBranchModal] = useState(false);

  const handleAddBranch = (branchName: string) => {
    const newBranch = {
      id: (branches.length + 1).toString(),
      name: branchName,
    };
    setBranches([...branches, newBranch]);
    setShowAddBranchModal(false);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">Tadika Branches</h1>
      <BranchList branches={branches} />
      <Button onClick={() => setShowAddBranchModal(true)} className="w-full">
        Add New Branch
      </Button>
      {showAddBranchModal && (
        <AddBranchModal
          onClose={() => setShowAddBranchModal(false)}
          onSubmit={handleAddBranch}
        />
      )}
    </div>
  );
}
