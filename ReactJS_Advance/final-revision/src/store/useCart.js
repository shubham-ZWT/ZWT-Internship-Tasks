import toast from "react-hot-toast";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useCart = create(
  devtools(
    persist(
      (set, get) => ({
        items: [],

        addToCart: (product) => {
          const currentItems = get().items;
          const existingItem = currentItems.find(
            (item) => item.id === product.id,
          );

          if (existingItem) {
            set({
              items: currentItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: (item.quantity || 1) + 1 }
                  : item,
              ),
            });
            toast.success("Quantity Increased");
          } else {
            set({
              items: [...currentItems, { ...product, quantity: 1 }],
            });
            toast.success("New Item added Successfully!");
          }
        },

        removeFromCart: (id) => {
          set({
            items: get().items.filter((item) => item.id !== id),
          });
        },
      }),
      {
        name: "cart-storage",
      },
    ),
  ),
);

export default useCart;
