import React, { useState } from "react";
import CustomerWarehouseForm from "../components/placeOrder/CustomerWarehouseForm";
import ProductSelectionForm from "../components/placeOrder/ProductSelectionForm";
import ReviewConfirmForm from "../components/placeOrder/ReviewConfirmForm";
import StepsProgress from "../components/placeOrder/StepsProgress";
import { OrderService } from "../services/orderService";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { HiHandThumbUp } from "react-icons/hi2";

export default function PlaceNewOrder() {
  const [step, setStep] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [warehouseId, setWarehouseId] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const handleNextstep = () => {
    if (step === 1 && !customerName.trim()) {
      alert("Customer name is required");
      return;
    }

    if (step === 2 && items.length === 0) {
      alert("Select at least one product");
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handlePlaceOrder = async () => {
    try {
      setLoading(true);

      const payload = {
        customer_name: customerName.trim(),
        warehouse_id: Number(warehouseId),
        items: items,
      };

      const response = await OrderService.placeOrder(payload);
      console.log(response);

      alert(`Order placed successfully with Order Id : ${response.orderID}`);

      setCustomerName("");
      setWarehouseId(1);
      setItems([]);
      setStep((prev) => prev + 1);
      setTimeout(() => {
        setStep(1);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Error placing order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <h1 className="text-xl font-semibold">Place New Order</h1>

        <StepsProgress step={step} />

        {step === 1 && (
          <CustomerWarehouseForm
            customerName={customerName}
            setCustomerName={setCustomerName}
            warehouseId={warehouseId}
            setWarehouseId={setWarehouseId}
          />
        )}

        {step === 2 && (
          <ProductSelectionForm
            warehouseId={warehouseId}
            items={items}
            setItems={setItems}
            products={products}
            setProducts={setProducts}
          />
        )}

        {step === 3 && (
          <ReviewConfirmForm
            customerName={customerName}
            warehouseId={warehouseId}
            items={items}
            products={products}
          />
        )}

        <div className="flex justify-center gap-4">
          {step > 1 && (
            <button
              onClick={() => setStep((prev) => prev - 1)}
              className="bg-amber-100 px-4 py-2 rounded text-amber-700 font-semibold flex items-center gap-1"
            >
              <span>
                <GrFormPrevious className="text-xl" />
              </span>
              Previous{" "}
            </button>
          )}

          {step < 3 && (
            <button
              onClick={handleNextstep}
              className="bg-blue-100  px-4 py-2 rounded text-blue-700 font-semibold flex items-center gap-1"
            >
              Next
              <span>
                <MdNavigateNext className="text-xl" />
              </span>
            </button>
          )}

          {step === 3 && (
            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className="bg-green-200 px-4 py-2 rounded text-green-700 font-semibold disabled:opacity-50 flex flex-row items-center gap-1"
            >
              {loading ? "Placing Order..." : "Submit Order"}
              <span>
                <HiHandThumbUp className="text-xl" />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
