import { useEditProductForm } from "../hooks/useEditProductForm";
import { EditModal } from "..//..//..//components/ui/EditModal";

function EditProductForm({ product }) {
  console.log(product);
  const { register, onSubmit } = useEditProductForm(product);
  return (
    <EditModal
      product={product}
      register={register}
      onSubmit={onSubmit}
    ></EditModal>
  );
  //EditModal

  // console.log(product_id);

  // TESTING return (
  //   <div>
  //     <div>
  //       <h1>Edit Product</h1>
  //       <form onSubmit={onSubmit}>
  //         <label>
  //           Product Name:
  //           <input
  //             {...register("name")}
  //             type="text"
  //             // name="product_name"
  //             // placeholder="product name"
  //             defaultValue={product.name}
  //           />
  //         </label>
  //         <label>
  //           Product Price:
  //           <input
  //             {...register("price")}
  //             type="text"
  //             // placeholder="price"
  //             // name="product_price"
  //             // defaultValue={product.price}
  //             // onChange={setproductNameEdited(true)}
  //           />
  //         </label>
  //         <button
  //           // onClick={(e) => {
  //           //   e.preventDefault();
  //           //   console.log(isDirty);
  //           //   handleSubmit(onSubmit());
  //           // }}
  //           className="bg-red-400 px-2.5 py-2.5 text-white"
  //           type="submit"
  //         >
  //           Update Product
  //         </button>

  //         {/* <input type="text" placeholder="name" />
  //         <input type="text" placeholder="name" /> */}
  //       </form>
  //       {/* <form>
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
  //       </form> */}
  //     </div>
  //   </div>
  // );

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

export default EditProductForm;
