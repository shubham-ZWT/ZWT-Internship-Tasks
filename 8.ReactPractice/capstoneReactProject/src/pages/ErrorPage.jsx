import React from "react";

export default function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <div className=" flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold">Error 404 Page Not Found</h1>
        <a
          href="/login"
          className="bg-black/80 text-white text-xl px-5 py-1 rounded-full hover:bg-black"
        >
          Go to Login Page
        </a>
      </div>
    </div>
  );
}
