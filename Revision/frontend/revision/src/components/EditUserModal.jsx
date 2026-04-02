import { forwardRef, useImperativeHandle, useState } from "react";
import { useUpdateUser } from "../queries/userQueries";

const EditUserModal = forwardRef((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useImperativeHandle(ref, () => ({
    open: (user) => {
      setUserData(user);
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    },
  }));

  const handleChange = (e) => {
    const { id, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const updateMutation = useUpdateUser();

  const handleSave = () => {
    updateMutation.mutate(userData, {
      onSuccess: () => {
        setIsOpen(false);
      },
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <p>
          Editing: <strong>{userData?.name}</strong>
        </p>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={userData.name}
          className="border border-gray-200 px-3"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={userData.email}
          className="border border-gray-200 px-3"
          onChange={handleChange}
        />
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div> 
    </div>
  );
});

export default EditUserModal;
