import React, { useState } from "react";
import useWarehouses from "../../hooks/useWarehouses";
import { validateName } from "../../utils/validations";

export default function CustomerWarehouseForm({
  customerName,
  setCustomerName,
  warehouseId,
  setWarehouseId,
}) {
  const { data: warehouses = [] } = useWarehouses();
  const [nameError, setNameError] = useState("");

  const handelNameChange = (e) => {
    const value = e.target.value;
    setCustomerName(value);

    const validationResult = validateName(value);

    if (validationResult !== true) {
      setNameError(validationResult);
    } else {
      setNameError("");
    }
  };

  const handelWarehouseChange = (e) => {
    setWarehouseId(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-center text-2xl">Customer & Warehouse Selection</h1>
      <div className="w-full flex flex-row justify-center gap-3">
        <form>
          <div className="border p-4 flex flex-row gap-3 items-center">
            <label htmlFor="customer_name">Customer Name</label>

            <div className="flex flex-col">
              <input
                type="text"
                id="customer_name"
                name="customer_name"
                className="border border-gray-400 text-black px-2 py-1"
                value={customerName}
                onChange={handelNameChange}
              />

              {nameError && (
                <span className="text-red-500 text-sm mt-1">{nameError}</span>
              )}
            </div>

            <label htmlFor="warehouse">Select WareHouse</label>

            <select
              name="warehouse"
              id="warehouse"
              className="border px-2 py-1"
              value={warehouseId}
              onChange={handelWarehouseChange}
            >
              {warehouses.map((wh) => (
                <option key={wh.warehouse_id} value={wh.warehouse_id}>
                  {wh.warehouse_name} - {wh.location}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
