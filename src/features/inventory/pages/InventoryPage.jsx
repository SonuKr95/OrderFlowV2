import { useState } from "react";
import List from "../../../components/ui/List";
import { useFetchActiveInventory } from "../hooks/useFetchActiveInventory";
import { inventoryTableColumns } from "../constants/inventoryTableColumns";
import UpdateInventoryModal from "../components/UpdateInventoryModal";
import InventoryTable from "../components/InventoryTable";

export default function InventoryPage() {
  const { data: ActiveInventoryList = [] } = useFetchActiveInventory();
  const [adjustStock, setadjustStock] = useState(null);
  return (
    <div className="grid-row-2 relative grid">
      <UpdateInventoryModal
        isOpen={!!adjustStock}
        selectedProduct={adjustStock}
        setadjustStock={setadjustStock}
      />

      <List columns={inventoryTableColumns} colStart={1} rowStart={3}>
        {ActiveInventoryList?.map((inventoryRecord) => {
          return (
            <InventoryTable
              key={inventoryRecord.id}
              inventoryRecord={inventoryRecord}
              setadjustStock={setadjustStock}
            />
          );
        })}
      </List>
    </div>
  );
}
