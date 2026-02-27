import React from "react";
import { useState, useEffect } from "react";
import { OrderService } from "../services/orderService";

export default function useOrders(filters) {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const response = await OrderService.getAllOrders(filters);
      console.log("hello");
      setData(response.orders);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [filters]);

  return { data, isloading, error, reFetch: fetchOrders };
}
