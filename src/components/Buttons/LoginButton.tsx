"use client";

import { signIn } from "next-auth/react";

import type { ClientSafeProvider } from "next-auth/react";

export default function LoginButton({ auth }: { auth?: ClientSafeProvider }) {
  return (
    <button
      type="button"
      className="border shadow-1 rounded-md py-3 px-6 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => signIn(auth?.id || "")}
    >
      {auth ? (
        <div className="flex items-center">Sign In with {auth.name}</div>
      ) : (
        "Custom Login Page"
      )}
    </button>
  );
}
