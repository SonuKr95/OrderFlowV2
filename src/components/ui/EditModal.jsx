// import { useEditProductForm } from "../../features/products/hooks/useEditProductForm";
import { closeicon } from "../../icons/_index";
import useEditModal from "../../app/context/hook/useEditModal";
import { useList } from "../../app/context/hook/useList";

export function EditModal({ product, register, onSubmit }) {
  const { list } = useList();
  const { toggleEditModal } = useEditModal();
  console.log(product);

  //
  // console.log(product_id);

  return (
    <div>
      <div className="text-secondary-brand-cyprus top- absolute top-1/2 left-1/2 h-[40vh] w-fit -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#F3FAF2] px-3 py-3">
        <div className="w-full">
          <button onClick={() => toggleEditModal()}>
            <img
              src={closeicon}
              className="h-[25px] w-[25px] hover:cursor-pointer"
              alt=""
            />
          </button>
          <h1 className="mb-4 text-center text-2xl font-bold">
            {list === "productlist" ? "Edit Product" : "Edit Inventory"}
          </h1>
          <div className="flex items-center justify-center px-5 text-xl font-semibold">
            <form onSubmit={onSubmit}>
              <label className="mb-3 block">
                <span className="mr-4"> Product Name:</span>
                <input
                  {...register("name")}
                  type="text"
                  defaultValue={product.name}
                  className="rounded-sm focus:outline-1"
                />
              </label>
              <label className="mb-8 block">
                <span className="mr-4">
                  {list === "productlist"
                    ? " Product Price:"
                    : "Edit Inventory:"}
                </span>

                {list === "productlist" ? (
                  <input
                    {...register("price")}
                    type="text"
                    className="rounded-sm focus:outline-1"
                  />
                ) : (
                  <input
                    {...register("quantity")}
                    type="text"
                    placeholder="enter new
        quantity"
                    defaultValue={product.quantity}
                  />
                )}
              </label>
              {/* <button
                className="bg-primary-brand-ocean-green absolute top-1/2 left-1/2 mt-5 -translate-x-1/2 -translate-y-1/2 rounded-md px-2.5 py-2.5 text-white hover:cursor-pointer"
                type="submit"
              >
                Update Product
              </button> */}
              <button
                className="bg-primary-brand-ocean-green w-full self-end rounded-md px-2.5 py-2.5 text-white hover:cursor-pointer"
                type="submit"
              >
                {list === "productlist"
                  ? " Update Product"
                  : "Update Inventory"}{" "}
              </button>

              {/* <input type="text" placeholder="name" />
          <input type="text" placeholder="name" /> */}
            </form>
          </div>
        </div>
        {/* <form>
          <div>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit">Update</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form> */}
      </div>
    </div>
  );

  // const [name, setName] = useState(product.name);
  // const [price, setPrice] = useState(product.price);
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   onUpdate({
  //     id: product.id,
  //     name,
  //     price: Number(price),
  //   });
  // }
  // return (
  //   <div style={overlayStyle}>
  //     <div style={modalStyle}>
  //       <h2>Edit Product</h2>
  //       <form onSubmit={handleSubmit}>
  //         <div>
  //           <label>Name</label>
  //           <input value={name} onChange={(e) => setName(e.target.value)} />
  //         </div>
  //         <div>
  //           <label>Price</label>
  //           <input
  //             type="number"
  //             value={price}
  //             onChange={(e) => setPrice(e.target.value)}
  //           />
  //         </div>
  //         <button type="submit">Update</button>
  //         <button type="button" onClick={onClose}>
  //           Cancel
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );
}
