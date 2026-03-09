import { useState } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

export default function List() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    if (loading) return;

    setLoading(true);
    try {
      // 1. Fetch from RandomUser API
      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=10&seed=abc`,
      );
      const data = await response.json();

      // 2. Append new users to the existing list
      setUsers((prev) => [...prev, ...data.results]);

      // 3. Increment page for the next trigger
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  const sentinelRef = useInfiniteScroll(loadMore);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Employee Directory
      </h1>

      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={user.login.uuid + index}
            className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <img
              src={user.picture.thumbnail}
              alt={user.name.first}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-gray-800">
                {user.name.first} {user.name.last}
              </p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        ))}
      </div>

      <div ref={sentinelRef} className="h-32 flex items-center justify-center">
        {loading && (
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="text-blue-600 font-medium">
              Loading more users...
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
