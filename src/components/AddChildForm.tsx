import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface AddChildFormProps {
  onClose: () => void;
  onSubmit: (childName: string, childAge: number, guardianName: string) => void;
}

export function AddChildForm({ onClose, onSubmit }: AddChildFormProps) {
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [guardianName, setGuardianName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(childName, parseInt(childAge), guardianName);
  };

  return (
    <Card className="p-4 mt-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="childName">Child&apos;s Name</Label>
          <Input
            id="childName"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            placeholder="Enter child's name"
            required
          />
        </div>
        <div>
          <Label htmlFor="childAge">Child&apos;s Age</Label>
          <Input
            id="childAge"
            type="number"
            value={childAge}
            onChange={(e) => setChildAge(e.target.value)}
            placeholder="Enter child's age"
            required
            min="1"
            max="6"
          />
        </div>
        <div>
          <Label htmlFor="guardianName">Guardian&apos;s Name</Label>
          <Input
            id="guardianName"
            value={guardianName}
            onChange={(e) => setGuardianName(e.target.value)}
            placeholder="Enter guardian's name"
            required
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Add Child</Button>
        </div>
      </form>
    </Card>
  );
}
