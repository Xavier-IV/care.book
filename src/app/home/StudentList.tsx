"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Student {
  id: number;
  name: string;
  age: number;
  guardian: string;
}

interface StudentListProps {
  students: Student[];
}

export function StudentList({ students }: StudentListProps) {
  // Group students by first letter
  const groupedStudents = students.reduce(
    (groups, student) => {
      const firstLetter = student.name.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(student);
      return groups;
    },
    {} as Record<string, Student[]>,
  );

  // Sort letters alphabetically
  const sortedLetters = Object.keys(groupedStudents).sort();

  return (
    <Card className="overflow-hidden rounded-md shadow-sm">
      <ScrollArea className="h-[400px] pr-2" scrollHideDelay={0}>
        {sortedLetters.map((letter) => (
          <div key={letter} id={`section-${letter}`} className="mb-4">
            <div className="sticky top-0 bg-white/80 backdrop-blur-sm px-4 py-1 font-semibold text-sm text-muted-foreground">
              {letter}
            </div>
            <ul className="">
              {groupedStudents[letter].map((student) => (
                <li key={student.id} className="px-4 py-3 hover:bg-gray-200/50">
                  <div className="font-medium">{student.name}</div>
                  <div className="text-sm text-gray-500">
                    Age: {student.age}
                  </div>
                  <div className="text-sm text-gray-500">
                    Guardian: {student.guardian}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ScrollArea>
    </Card>
  );
}
