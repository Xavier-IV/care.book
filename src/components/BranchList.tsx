import Link from 'next/link'
import { Card } from '@/components/ui/card'

interface Branch {
  id: string
  name: string
}

interface BranchListProps {
  branches: Branch[]
}

export function BranchList({ branches }: BranchListProps) {
  return (
    <Card className="overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {branches.map((branch) => (
          <li key={branch.id}>
            <Link href={`/${branch.id}`} className="block px-4 py-3 hover:bg-gray-50 transition duration-150 ease-in-out">
              {branch.name}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}

