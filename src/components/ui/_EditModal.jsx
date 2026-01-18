import { useEffect } from "react";

export default function EditProductModal({
  isOpen,
  onClose,
  product,
  onSubmit,
}) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // prevent scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const updatedProduct = {
      name: formData.get("name"),
      price: formData.get("price"),
    };

    onSubmit(updatedProduct);
    onClose();
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
        <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
          <header className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Edit Product</h2>
            <button
              onClick={onClose}
              className="text-xl text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </header>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Product Name</label>
              <input
                name="name"
                defaultValue={product.name}
                required
                className="mt-1 w-full rounded-md border px-3 py-2 focus:ring focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                name="price"
                type="number"
                defaultValue={product.price}
                required
                className="mt-1 w-full rounded-md border px-3 py-2 focus:ring focus:outline-none"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border px-4 py-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-black px-4 py-2 text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
