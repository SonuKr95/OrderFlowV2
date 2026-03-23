import CreateProductFormField from "./CreateProductFormField";
import { CREATE_PRODUCT_TAX_RATES } from "../../config/createProductTaxRates";

function CreateProductFormSection({
  sections,
  register,
  categories,
  isViewer,
}) {
  return sections.map((section) => (
    <div key={section.title} className="mb-6">
      <h2 className="text-text-primary mb-4 text-lg font-semibold tracking-tight">
        {section.title}
      </h2>

      <div className="space-y-5">
        {section.fields.map((field) => (
          <CreateProductFormField
            key={field.name}
            field={field}
            register={register}
            isViewer={isViewer}
            options={
              field.name === "_tax_rate" ? CREATE_PRODUCT_TAX_RATES : categories
            }
          />
        ))}
      </div>
    </div>
  ));
}

export default CreateProductFormSection;
