import { useState, useEffect, useCallback, useRef } from "react";

export const useWebSocket = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("connecting");
  const socket = useRef(null);
  const reconnectCount = useRef(0);
  const reconnectTimeout = useRef(null);

  const connect = useCallback(() => {
    setStatus("connecting");
    socket.current = new WebSocket(url);

    socket.current.onopen = () => {
      console.log("Connected to WS");
      setStatus("open");
      reconnectCount.current = 0;
    };

    socket.current.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        setData(message);
      } catch (err) {
        console.error("WS Parse Error", err);
      }
    };

    socket.current.onclose = () => {
      setStatus("closed");

      const delay = Math.min(1000 * Math.pow(2, reconnectCount.current), 30000);

      reconnectTimeout.current = setTimeout(() => {
        reconnectCount.current++;
        connect();
      }, delay);
    };

    socket.current.onerror = () => setStatus("error");
  }, [url]);

  useEffect(() => {
    connect();
    return () => {
      socket.current?.close();
      clearTimeout(reconnectTimeout.current);
    };
  }, [connect]);

  return { data, status };
};
