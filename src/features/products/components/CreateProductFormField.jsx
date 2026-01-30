function CreateProductFormField({ field, register, options }) {
  const { name, placeholder, type, label, rows } = field;
  const baseClass =
    "w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm focus:border-green-500 focus:outline-none";

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>

      {type === "textarea" && (
        <textarea
          {...register(name)}
          rows={rows ?? 3}
          className={baseClass}
          placeholder={placeholder}
        />
      )}

      {type === "select" && (
        <select {...register(name)} className={baseClass} defaultValue="">
          <option disabled value="">
            {placeholder}
          </option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {type !== "textarea" && type !== "select" && (
        <input
          {...register(name)}
          type={type}
          className={baseClass}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default CreateProductFormField;
