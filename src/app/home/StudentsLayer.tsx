"use client";

import { Separator } from "@/components/ui/separator";
import { StudentList } from "./StudentList";
import { Tables } from "@/types/database.type";

interface StudentsLayerProps {
  branchName: string;
  students: Tables<"students">[];
}

export function StudentsLayer({ branchName, students }: StudentsLayerProps) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-200/50 backdrop-blur-md p-4">
      <div className="bg-gray-200 rounded-lg shadow-lg max-w-md w-full space-y-4">
        <div className="flex justify-between items-center p-6 pb-0">
          <div className="flex flex-col items-start max-w-[80%]">
            <h2 className="text-xl font-bold text-gray-800 truncate w-full">
              {branchName}
            </h2>
            <span className="text-sm text-gray-600 italic">
              {students.length} total of students
            </span>
          </div>
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
