import { useState, useEffect } from "react";
import { useUsers } from "../queries/userQueries";
import useDebounce from "../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";
import EditUserModal from "./EditUserModal";

export default function UserList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const debouncedSearch = useDebounce(searchTerm, 1000);

  const editModalRef = useRef();

  useEffect(() => {
    const params = {};
    if (debouncedSearch) params.q = debouncedSearch;
    if (page > 1) params.page = page;

    setSearchParams(params, { replace: true });
  }, [debouncedSearch, page, setSearchParams]);

  const { data, isLoading, isError, error } = useUsers(debouncedSearch, page);

  if (isLoading) return <div className="p-10">Loading HR Data...</div>;

  if (isError)
    return <div className="text-red-500">Error: {error.message}</div>;

  console.log("in the dahs", data);

  return (
    <>
      <EditUserModal ref={editModalRef} />
      <div className="my-4">
        <label htmlFor="searchName">Search: </label>
        <input
          type="text"
          id="searchName"
          placeholder="Search user by name"
          className="border border-gray-200 px-3 py-1 items-center"
          value={searchTerm}
          onChange={(e) => {
            (setSearchTerm(e.target.value), setPage(1));
          }}
        />
      </div>
      <div className="space-y-2">
        {data?.rows?.length > 0 ? (
          data.rows.map((user) => (
            <>
              <div
                key={user.id}
                className="p-2 border-b flex flex-row items-center gap-4"
              >
                <div className="flex flex-col">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                <button
                  className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-lg"
                  onClick={() => editModalRef.current.open(user)}
                >
                  Edit Profile
                </button>
              </div>
            </>
          ))
        ) : (
          <p>No users found.</p>
        )}
        <div>
          {data.totalPages > 1 && (
            <div className="flex gap-4 mt-4 items-center">
              <button
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Previous
              </button>

              <span>
                Page {page} of {data.totalPages}
              </span>

              <button
                disabled={page === data.totalPages}
                onClick={() => setPage((prev) => prev + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
