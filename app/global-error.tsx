"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body className="bg-black text-white flex items-center justify-center min-h-screen">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Bir şeyler ters gitti!</h2>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-amber-500 text-black rounded-xl font-bold"
          >
            Tekrar Dene
          </button>
        </div>
      </body>
    </html>
  );
}
