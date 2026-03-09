import React, { useCallback, useMemo, useState } from "react";
import { useEmployeeFeed, useEmployees } from "../queries/employeeQueries";
import useDebounce from "../hooks/useDebounce";
import {
  useCreateEmployee,
  useDeleteEmployee,
} from "../mutations/employeeMutation";
import Count from "./Count";
import NoRender from "./NoRender";
import ErrorFallback from "./ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import EmployeeCard from "./EmployeeCard";

// import { useBlocker } from "react-router-dom";

export default function EmployeeList() {
  const [search, setSearch] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const decouncedSearch = useDebounce(search, 1000);

  // const blocker = useBlocker(isDirty);
  // to use useBlocker we have to implement Data Router and not Browser Router
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useEmployeeFeed({ decouncedSearch });

  console.log(data);

  const { mutate, isPending } = useCreateEmployee();
  const deleteMutation = useDeleteEmployee();

  const handleFormChange = () => {
    if (!isDirty) setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    data.salary = Number(data.salary);

    mutate(data, {
      onSuccess: () => {
        setIsDirty(false); // Reset dirtiness on success
        e.target.reset();
      },
    });
    e.target.reset();
  };

  //now this will only Re calculated with the dependency i.e data will change
  const allEmployees = useMemo(() => {
    console.log("Flattening employees..."); // You'll see this only when data updates!
    return data?.pages.flatMap((page) => page.employees) ?? [];
  }, [data]);

  //UseCallback so new function on every re render
  const handelDelete = useCallback(
    (id) => {
      if (window.confirm("Are you sure you want to delete this employee?")) {
        deleteMutation.mutate(id);
      }
    },
    [deleteMutation],
  );

  if (isLoading) return <div className="p-10 text-center">Initial Load...</div>;
  if (isError) throw new Error(error.message);

  // Error Handling using ErrorBoundary
  if (data?.pages[0]?.employees.length > 4)
    throw new Error("API Limit Exceeded!");

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => refetch()}>
      {/* Blocker implementation to prevent back from unsaved data */}
      {/* {blocker.state === "blocked" && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm text-center">
            <h2 className="text-xl font-bold text-red-600">Unsaved Changes!</h2>
            <p className="my-4 text-gray-600">
              You are in the middle of creating an employee. Are you sure you
              want to leave?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => blocker.reset()}
                className="flex-1 px-4 py-2 border rounded"
              >
                Stay
              </button>
              <button
                onClick={() => blocker.proceed()}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded"
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      )} */}
      <h1>Create Employee</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="p-4 border rounded space-y-2 max-w-2xl"
          onChange={handleFormChange}
        >
          <input
            name="first_name"
            placeholder="First Name"
            required
            className="border p-2 w-full"
          />
          <input
            name="last_name"
            placeholder="Last Name"
            required
            className="border p-2 w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="border p-2 w-full"
          />
          <input
            name="hire_date"
            type="date"
            required
            className="border p-2 w-full"
          />
          <input
            name="salary"
            type="number"
            placeholder="Salary"
            required
            className="border p-2 w-full"
          />

          <button
            type="submit"
            disabled={isPending}
            className="bg-green-600 text-white p-2 rounded w-full"
          >
            {isPending ? "Saving..." : "Add Employee"}
          </button>
        </form>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Employees</h1>

          {isFetching && (
            <span className="text-sm text-blue-500">Updating...</span>
          )}
        </div>
        <input
          type="text"
          placeholder="Filter by name..."
          className="border p-2 rounded w-full mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-1 gap-4 w-full max-w-2xl">
          {allEmployees.map((emp) => (
            <EmployeeCard
              id={emp.id}
              first_name={emp.first_name}
              email={emp.email}
              handelDelete={handelDelete}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-2">
          {hasNextPage ? (
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {isFetchingNextPage ? "Loading more..." : "Load More"}
            </button>
          ) : (
            <p className="text-gray-500 text-sm italic">
              You've reached the end of the list.
            </p>
          )}
        </div>
      </div>
      <Count />
    </ErrorBoundary>
  );
}
