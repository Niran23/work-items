type JustifyBoxProps = {
  name: string;
  justifyClass: string;
  itemsClass: string;
};

function JustifyBox({
  name,
  justifyClass,
  itemsClass,
}: JustifyBoxProps) {

  // Decide which 2 of the 12 cells contain A and B
  const positions: Record<string, [number, number]> = {

    // Start
    "justify-start-items-start": [1, 2],
    "justify-start-items-center": [5, 6],
    "justify-start-items-end": [9, 10],

    // Center
    "justify-center-items-start": [2, 3],
    "justify-center-items-center": [6, 7],
    "justify-center-items-end": [10, 11],

    // End
    "justify-end-items-start": [3, 4],
    "justify-end-items-center": [7, 8],
    "justify-end-items-end": [11, 12],

    // Space Between
    "justify-between-items-center": [5, 8],

    // Space Around
    "justify-around-items-center": [6, 7],

    // Space Evenly
    "justify-evenly-items-center": [5, 8],
  };

  const key = `${justifyClass}-${itemsClass}`;

  const [aPosition, bPosition] =
    positions[key] || [1, 2];

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4">

      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">
        {name}
      </h2>

      {/* EXACTLY 12 BOXES */}
      <div className="grid grid-cols-4 grid-rows-3">

        {Array.from({ length: 12 }, (_, index) => {

          const cellNumber = index + 1;

          const isA = cellNumber === aPosition;
          const isB = cellNumber === bPosition;

          return (
            <div
              key={cellNumber}
              className="h-20 border border-gray-400 flex items-center justify-center"
            >

              {isA && (
                <div
                  className={`bg-green-100 border border-green-300 px-4 py-3 rounded-lg flex ${justifyClass} ${itemsClass}`}
                >
                  A
                </div>
              )}

              {isB && (
                <div
                  className={`bg-green-100 border border-green-300 px-4 py-3 rounded-lg flex ${justifyClass} ${itemsClass}`}
                >
                  B
                </div>
              )}

            </div>
          );
        })}

      </div>

      {/* Tailwind Classes */}
      <div className="mt-4 text-center">
        <p className="text-sm font-medium text-gray-600">
          {justifyClass}
        </p>

        <p className="text-sm font-medium text-gray-600">
          {itemsClass}
        </p>
      </div>

    </div>
  );
}

export default JustifyBox;