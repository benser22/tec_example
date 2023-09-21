import React from "react";

function TailwindComponent() {
  return (
    <div className="bg-gray-200 p-6">
      <h1 className="text-3xl font-extrabold text-indigo-600 mb-4">
        Tailwind
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Grid Layout</h2>
          <p className="text-sm text-gray-600">Using grid for layout.</p>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Buttons</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Tailwind CSS Button
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Cards</h2>
          <div className="bg-blue-200 p-2 rounded-lg mt-2">
            <h3 className="text-lg font-semibold">Card Title</h3>
            <p className="text-sm text-gray-600">
              Some card content goes here.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-red-500 font-semibold">
          This is a red warning message.
        </p>
      </div>
    </div>
  );
}

export default TailwindComponent;
