import React from "react";


export const SkeletonList = () => {
    return (
        <div className="w-full">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              className="w-full flex items-center justify-start gap-2 animate-pulse"
              key={index}
            >
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="flex flex-col font-black w-full">
                <span className="text-lg font-bold w-full h-4 bg-gray-300 rounded"></span>
              </div>
            </div>
          ))}
        </div>
    );
}