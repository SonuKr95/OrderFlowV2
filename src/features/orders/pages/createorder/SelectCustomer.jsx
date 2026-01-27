import { useGetCustomers } from "../../../customers/hooks/useGetCustomers";
import { setCustomer } from "../../../../app/store/slices/cartSlice";
import { useDispatch } from "react-redux";

export function SelectCustomer() {
  const { data: customers, isSuccess, isLoading } = useGetCustomers();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const selectedId = e.target.value;
    dispatch(setCustomer(selectedId));
  };

  return (
    <div className="w-fit">
      <p>Select a customer</p>
      <select name="" id="" onChange={handleChange}>
        <option defaultValue={`Select a customer`} disabled>
          Select a customer
        </option>
        {customers?.map((customer) => (
          <option value={customer.id}>{customer.name}</option>
        ))}
      </select>
    </div>
  );
}
