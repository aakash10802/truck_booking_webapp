"use client";

import { UserButton, SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-lef min-h-screen">
      <h2 className="text-2xl font-bold">Welcome to Truck.in</h2>
      <UserButton appearance={{ elements: { afterSignOutUrl: "/" } }} />
      <SignIn  routing="hash" />
    </div>
  );
}
