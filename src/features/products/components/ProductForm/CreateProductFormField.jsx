function CreateProductFormField({ field, register, options, isViewer }) {
  console.log(isViewer);
  //createProductFormSections for referecnce
  const { name, placeholder, type, label, rows } = field;
  const baseClass = `w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm focus:border-green-500 focus:outline-none ${isViewer ? " cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900 disabled:opacity-70" : ""}`;

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
          disabled={isViewer}
        />
      )}

      {type === "select" && (
        <select
          {...register(name)}
          className={baseClass}
          defaultValue=""
          disabled={isViewer}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options?.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
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
          disabled={isViewer}
        />
      )}
    </div>
  );
}

export default CreateProductFormField;
