import * as Sentry from "@sentry/react";
// Add this button component to your app to test Sentry's error tracking
export default function ErrorButton() {
  return (
    <button className="mt-40 bg-red-600 p-3 rounded-3xl text-white"
      onClick={() => {
        throw new Error("This is your first error!");
      }}
    >
      Break the world
    </button>
  );
}
