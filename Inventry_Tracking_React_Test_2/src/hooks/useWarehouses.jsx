import React from "react";
import { useState, useEffect } from "react";
import { WarehouseService } from "../services/warehouseService";

export default function useWarehouses() {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWarehouses = async () => {
    setIsLoading(true);
    try {
      const response = await WarehouseService.getAllWarehouses();
      setData(response.warehouses);
      console.log(response.warehouses);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);

  return { data, isloading, error, reFetch: fetchWarehouses };
}
