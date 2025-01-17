import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

interface AddBranchFormProps {
  onClose: () => void
  onSubmit: (branchName: string) => void
}

export function AddBranchForm({ onClose, onSubmit }: AddBranchFormProps) {
  const [branchName, setBranchName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(branchName)
  }

  return (
    <Card className="p-4 mt-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="branchName">Branch Name</Label>
          <Input
            id="branchName"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            placeholder="Enter branch name"
            required
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Add Branch</Button>
        </div>
      </form>
    </Card>
  )
}

