import { Card } from '@/components/ui/card'

interface Student {
  id: string
  name: string
  age: number
  guardian: string
}

interface StudentListProps {
  students: Student[]
}

export function StudentList({ students }: StudentListProps) {
  return (
    <Card className="overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {students.map((student) => (
          <li key={student.id} className="px-4 py-3">
            <div className="font-medium">{student.name}</div>
            <div className="text-sm text-gray-500">Age: {student.age}</div>
            <div className="text-sm text-gray-500">Guardian: {student.guardian}</div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

