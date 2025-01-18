"use client";

import { Separator } from "@/components/ui/separator";
import { StudentList } from "./StudentList";

interface Student {
  id: number;
  name: string;
  age: number;
  guardian: string;
}

interface StudentsLayerProps {
  branchName: string;
  students: Student[];
}

export function StudentsLayer({ branchName, students }: StudentsLayerProps) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-200/50 backdrop-blur-md p-4">
      <div className="bg-gray-200 rounded-lg shadow-lg max-w-md w-full space-y-4">
        <div className="flex justify-between items-center p-6 pb-0">
          <h2 className="text-xl font-bold text-gray-800">
            {branchName} Students
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => history.back()}
          >
            ✕
          </button>
        </div>
        <Separator className="bg-gray-100" />

        <div className="px-6 py-2">
          {students.length === 0 ? (
            <p className="text-center text-gray-500">No students found.</p>
          ) : (
            <StudentList students={students} />
          )}
        </div>

        <Separator className="bg-gray-100" />

        <div className="p-6 pt-0">
          <button className="bg-gray-800 text-white rounded-lg px-4 py-2 w-full hover:bg-gray-700">
            Add New Child
          </button>
        </div>
      </div>
    </div>
  );
}
