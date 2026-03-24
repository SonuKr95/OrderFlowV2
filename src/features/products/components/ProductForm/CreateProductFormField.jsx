function CreateProductFormField({ field, register, options, isViewer }) {
  const { name, placeholder, type, label, rows } = field;
  const baseClass = `
w-full rounded-lg border border-border bg-background px-3 py-2 text-sm
text-text-primary placeholder:text-text-muted
focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
disabled:opacity-50 disabled:cursor-not-allowed
transition
`;

  return (
    <div>
      <label className="text-text-secondary mb-1 block text-sm">{label}</label>

      {type === "textarea" && (
        <textarea
          {...register(name, { required: true })}
          rows={rows ?? 3}
          className={`${baseClass} resize-none`}
          placeholder={placeholder}
          disabled={isViewer}
        />
      )}

      {type === "select" && (
        <select
          {...register(name, { required: true })}
          className={`${baseClass} appearance-none`}
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
          {...register(name, { required: true })}
          type={type}
          className={`${baseClass} focus:border-transparent focus:ring-2 focus:ring-violet-500`}
          placeholder={placeholder}
          disabled={isViewer}
        />
      )}
    </div>
  );
}

export default CreateProductFormField;
