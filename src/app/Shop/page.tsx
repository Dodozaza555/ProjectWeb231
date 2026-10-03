import type { Metadata } from "next";
import SearchExprolrer from "@/components/search/searchExprolrer";

export const metadata: Metadata = {
  title: "สินค้าทั้งหมด",
};


export default function Store() {
  return (
    <main className="shopPage">
      <SearchExprolrer />
    </main>
  );
}
