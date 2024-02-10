"use client";
import { fetchRevenue } from "@/lib/data";

import { useRef, useState } from "react";
import { lusitana } from "@/ui/fonts";
export default async function RevenueChart() {
  const revenue = await fetchRevenue();
  /*   const dias = revenue.map((invoice) => {
    console.log(
      new Intl.DateTimeFormat("es-CO", { weekday: "short" }).format(
        invoice.fecha
      )
    );
  }); */

  return <></>;
}
