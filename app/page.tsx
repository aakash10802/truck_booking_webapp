import Map from "@/components/Home/Map";
import SearchSection from "@/components/Home/SearchSection";
import Image from "next/image";

export default function Home() {
  return (
   <div className="p-6 grid grid-col-1 md:grid-cols-3 gap-5">
    <div>
      <SearchSection />
    </div>
     <div className="col-span-2">
      <Map />
     </div>
   </div>
  );
}
