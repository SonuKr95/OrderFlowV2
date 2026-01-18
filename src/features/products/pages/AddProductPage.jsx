import { useForm } from "react-hook-form";
import { useProductCategories } from "../hooks/useProductCategories";
import { useAddProduct } from "../hooks/useAddProduct";

function AddProductPage() {
  const categories = useProductCategories();
  const addProductMutation = useAddProduct();
  const { register, handleSubmit, reset } = useForm();
  function onSubmit(formData) {
    addProductMutation.mutate(formData, {
      onSuccess: () => {
        reset();
      },
    });
  }

  return (
    <div className="grid h-screen grid-cols-2 gap-5 px-2.5 py-2.5">
      <div className="row-start-2 bg-white">
        <p className="mb-6 text-xl font-bold text-[#23272e]">Basic Details</p>
        <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
          <p className="mb-3 text-[15px] font-bold">Product Name</p>
          <input
            {...register("product_name")}
            className="text-secondary-brand-cyprus mb-5 w-full rounded-lg bg-[#F9FAFB] stroke-[#e5e7eb] stroke-1 px-3 py-4 focus:outline-1 active:outline-1"
            type="text"
            name="product_name"
            id=""
            placeholder="Product Name"
          />

          <div className="mb-3 flex items-center gap-2.5">
            <p className="text-[15px] font-bold"> Category </p>
            <select
              className="text-secondary-brand-cyprus mt-[1px] font-bold focus:outline-0 active:outline-0"
              {...register("category_id")}
            >
              <option
                disabled
                className="text-secondary-brand-cyprus font-bold"
                selected
              >
                Choose a Product Category
              </option>

              {categories?.map((cat) => {
                // console.log(cat);
                return (
                  <>
                    <option
                      className="text-secondary-brand-cyprus font-bold"
                      key={cat.name}
                      value={cat.id}
                    >
                      {cat.name}: {cat.id}
                    </option>
                  </>
                );
              })}
            </select>
            {/* <select name="categories" id="">
          <option value="" disabled selected></option>
        </select> */}
          </div>
          <div className="mb-3 flex items-center gap-2.5">
            <p className="mt-0.5 text-[15px] font-bold">SKU</p>
            <input
              {...register("product_sku")}
              className="text-secondary-brand-cyprus w-full focus:outline-0 active:outline-0"
              type="text"
              name="product_sku"
              id=""
              placeholder="Product SKU"
            />
          </div>
          <p className="text-[15px] font-bold">Product Description</p>
          <textarea
            name="product_description"
            {...register("product_description")}
            className="text-secondary-brand-cyprus mb-3 w-full rounded-lg bg-[#F9FAFB] stroke-[#e5e7eb] stroke-1 focus:outline-1 active:outline-1"
            rows={6}
            id=""
          ></textarea>
          <p className="text-[15px] font-bold"> Price</p>
          <input
            className="text-secondary-brand-cyprus mb-3 w-full rounded-lg bg-[#F9FAFB] stroke-[#e5e7eb] stroke-1 px-2.5 py-2.5 focus:outline-1 active:outline-1"
            {...register("product_selling_price")}
            type="text"
            placeholder="Selling Price"
            name="product_selling_price"
          />
          <p className="text-[15px] font-bold">MRP</p>
          <input
            className="w-full rounded-lg bg-[#F9FAFB] stroke-[#e5e7eb] stroke-1 px-2.5 py-2.5 focus:outline-1 active:outline-1"
            {...register("product_mrp")}
            type="text"
            name="product_mrp"
            id=""
            placeholder="Maximum Retail Price"
          />
          <div className="mt-5 mb-3.5 flex items-center gap-5">
            <span className="text-[15px] font-bold">Stock Available</span>
            {/* <p className="text-[15px] font-bold">Current stock</p> */}
            <input
              className="rounded-lg bg-[#F9FAFB] stroke-[#e5e7eb] stroke-1 px-2.5 py-2.5 focus:outline-1 active:outline-1"
              {...register("product_quantity")}
              type="text"
              placeholder="Inventory"
              name="product_quantity"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-brand-ocean-green rounded-lg px-2.5 py-2.5 font-bold text-white hover:cursor-pointer"
            onClick={() => handleSubmit(onsubmit)}
          >
            Publish product
          </button>
        </form>
        <div className="flex gap-2.5">
          {/* <button
          type="submit"
          className="bg-orange-500 px-2.5 py-2.5 font-bold text-white"
          onClick={(e) => console.log(e)}
        >
          Save to draft
        </button> */}
        </div>
      </div>

      <div className="row-start-2 h-screen bg-white">
        <h2 className="mb-5 text-2xl font-bold">Upload Product Image</h2>
        <div>
          <p className="mb-2.5 font-bold">Product Image</p>
          <div className=""></div>
        </div>
        <div className="h-[50%] w-full rounded-lg bg-red-200"></div>
      </div>
    </div>
  );
}

export default AddProductPage;
