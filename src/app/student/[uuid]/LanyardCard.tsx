import React from "react";
import QRCode from "react-qr-code";

interface LanyardCardProps {
  name: string;
  age?: number;
  guardian: string;
  branch: string;
  customerId: string;
}

export function LanyardCard({
  name,
  age,
  guardian,
  branch,
  customerId,
}: LanyardCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="flex flex-col items-center">
        {/* Lanyard Card */}
        <div className="relative bg-blue-500 w-[320px] h-[480px] rounded-lg shadow-lg text-white flex flex-col items-center justify-between p-6">
          {/* Top Section */}
          <div className="flex flex-col items-center">
            <div className="text-sm font-medium uppercase">Branch</div>
            <h1 className="text-xl font-bold text-center">{branch}</h1>
          </div>

          {/* Middle Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-lg mt-2">ID: {customerId}</p>
            <p className="text-sm mt-1 text-gray-300">Guardian: {guardian}</p>
          </div>

          {/* Bottom Section */}
          <div className="text-center text-xs">
            <p>Student Details</p>
            <p className="text-gray-300">
              Powered by Pusat Jagaan Kanak-Kanak Matrix
            </p>
          </div>

          {/* Lanyard Hole */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-white rounded-b-md"></div>
        </div>

        {/* QR Code Section */}
        <div className="mt-4">
          <QRCode
            value={`https://beta.matrixeducare.com/student/${customerId}`}
            size={120}
            bgColor="#FFFFFF"
            fgColor="#000000"
            className="rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Scan to share pass
          </p>
        </div>
      </div>
    </div>
  );
}
