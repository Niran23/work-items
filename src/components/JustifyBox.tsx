type niran = {
  justifyClass: string;
  itemsClass: string;
  rows: number;
  columns: number;
};

function JustifyBox({
  justifyClass,
  itemsClass,
  rows,
  columns,
}: niran) {
  return (
    <div className="rounded-xl border border-gray-300 bg-white p-4">

      {/* Grid */}
      <div
        className="relative flex w-full"
        style={{
          aspectRatio: `${columns} / ${rows}`,
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: `
            calc(100% / ${columns}) calc(100% / ${rows})
          `,
        }}
      >

        {/* A and B */}
        <div
          className={`
            absolute inset-0
            flex
            ${justifyClass}
            ${itemsClass}
          `}
        >

          {/* A */}
          <div
            className="flex shrink-0 items-center justify-center border border-green-400 bg-green-100"
            style={{
              width: `calc(100% / ${columns})`,
              height: `calc(100% / ${rows})`,
            }}
          >
            A
          </div>

          {/* B */}
          <div
            className="flex shrink-0 items-center justify-center border border-green-400 bg-green-100"
            style={{
              width: `calc(100% / ${columns})`,
              height: `calc(100% / ${rows})`,
            }}
          >
            B
          </div>

        </div>

      </div>

      <p className="mt-3 text-center text-sm text-gray-500">
        {justifyClass} + {itemsClass}
      </p>

    </div>
  );
}

export default JustifyBox;