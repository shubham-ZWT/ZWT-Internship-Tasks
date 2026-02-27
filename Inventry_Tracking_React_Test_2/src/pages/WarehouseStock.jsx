import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { WarehouseService } from "../services/warehouseService";
import { useNavigate } from "react-router-dom";
import StatsCard from "../components/dashboard/StatsCard";
import Loading from "../components/common/Loading";
import StockTable from "../components/warehouseStock/StockTable";
import SearchStock from "../components/warehouseStock/SearchStock";
import useDebounce from "../hooks/useDebounce";

export default function WarehouseStock() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [warehouseStock, setWarehouseStock] = useState([]);
  const [warehouseId, setWarehouseId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 1000);

  useEffect(() => {
    const fetchStock = async () => {
      setIsLoading(true);
      const response = await WarehouseService.getWarehouseProducts(id);
      setWarehouseStock(response.stock);
      setIsLoading(false);
    };
    fetchStock();
  }, [id]);

  const handelIdChange = (e) => {
    console.log(e.target.value);
    setWarehouseId(e.target.value);
    navigate(`/warehouse/${e.target.value}/stock`, { replace: true });
  };

  const filteredStock = warehouseStock.filter(
    (st) =>
      st.sku.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      st.product_name.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  if (isLoading) {
    <Loading />;
  } else {
    return (
      <div className="w-full top-0 left-0 right-0 bottom-0 p-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          WarehouseStock : {}
          <input
            min="1"
            type="number"
            name="warehouseId"
            id="warehouseId"
            className="border border-gray-400 w-1/12 p-1 rounded-lg"
            value={warehouseId}
            onChange={(e) => handelIdChange(e)}
          />
          <div className="flex gap-3">
            <StatsCard
              name={"Total Products"}
              quantity={warehouseStock.length}
            />
            <StatsCard
              name={"Total Units"}
              quantity={warehouseStock
                .map((stock) => stock.quantity)
                .reduce((a, b) => a + b, 0)}
            />
            <StatsCard
              name={"Low Stock Products"}
              quantity={
                warehouseStock.filter(
                  (stock) => stock.quantity < 5 && stock.quantity != 0,
                ).length
              }
            />
            <StatsCard
              name={"Out of Stock Products"}
              quantity={
                warehouseStock.filter((stock) => stock.quantity === 0).length
              }
            />
          </div>
          <SearchStock searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <StockTable warehouseStock={filteredStock} />
        </div>
      </div>
    );
  }
}
