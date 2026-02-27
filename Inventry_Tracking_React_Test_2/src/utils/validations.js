export const validateName = (name) => {
  if (!name || name.trim() === "") return "Name is required";
  if (name.trim().length < 3) return "Name must be at least 3 characters";
  return true;
};
