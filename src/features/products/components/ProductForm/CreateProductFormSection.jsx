import CreateProductFormField from "./CreateProductFormField";
import { CREATE_PRODUCT_TAX_RATES } from "../../config/createProductTaxRates";

function CreateProductFormSection({
  sections,
  register,
  categories,
  isViewer,
}) {
  return sections.map((section) => (
    <div key={section.title} className="mb-8">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        {section.title}
      </h2>

      <div className="space-y-4">
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
