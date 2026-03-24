export default function List({ columns, children }) {
  if (!Array.isArray(columns)) return null;
  return (
    <div
      className={`border-border bg-surface overflow-hidden rounded-2xl border shadow-sm`}
    >
      <table className="min-w-full text-sm">
        <thead className="bg-background border-border border-b">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`text-text-secondary px-4 py-3 text-xs font-semibold tracking-wide uppercase ${
                  col.align === "right" ? "text-right" : "text-left"
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 transition-colors">
          {children}
        </tbody>
      </table>
    </div>
  );
}
