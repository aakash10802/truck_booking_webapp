"use client";

import Booking from "@/components/Booking/page";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-blue-100 ">
          <Booking/>
        </div>
        <div className="col-span-2 bg-amber-50 order-first ">Map</div>
      </div>
    </div>
  );
}
