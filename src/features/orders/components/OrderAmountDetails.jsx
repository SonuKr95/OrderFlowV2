import { useOrderItems } from "../hooks/useOrderItems";
// import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function OrderAmountDetails() {
  const { orderId } = useParams();
  const { data, isLoading, error } = useOrderItems(orderId);

  if (isLoading) return <p>Loading order items...</p>;
  if (error) return <p>Failed to load items</p>;
  console.log(data);
  const [{ subtotal, tax, shipping_cost, total_amount } = {}] =
    data.orderAmount || [];

  // console.log(data);
  //   const { data: productList } = useQuery({
  //     queryKey: ["productlist"],
  //     queryFn: getProducts,
  //     staleTime: 1000 * 60 * 5,
  //   });
  //   console.log(productList);
  //   return productList;
  // }

  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {/* Header / Toggle Button */}

      <div className="border-t border-gray-100 bg-gray-50/50 p-4">
        <p>Subtotal {subtotal} </p>
        <p>Tax {tax}</p>
        <p>Shipping {shipping_cost}</p>
        <p> Total Payable {total_amount}</p>
        {/* <p>Courier name</p>
        <p>Shipment status</p> */}
      </div>
    </div>
  );
}
