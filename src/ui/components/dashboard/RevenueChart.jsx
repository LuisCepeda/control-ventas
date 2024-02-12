import { fetchRevenue } from "@/lib/data";
import { formatDateToLocal } from "@/lib/utils";
import { Bar, BarChart } from "@tremor/react";
import { lusitana } from "@/ui/fonts";
export default async function RevenueChart() {
  const revenue = await fetchRevenue();

  const data = revenue.map((daily) => {
    return {
      fecha: formatDateToLocal(daily.fecha).toString().split(",")[0],
      "Cantidad vendida": Number(daily.cantidadvendida),
    };
  });
  //console.log("revenue", revenue);
  //console.log("data", data);

  return (
    <div className="rounded-xl bg-gray-100 p-4 sm:w-1/2">
      <div className="sm:grid-cols-1 mt-1 grid grid-cols-1 items-end gap-2 md:gap-4 rounded-md bg-white p-1">
        <BarChart
          className="flex flex-col items-center gap-2"
          data={data}
          index="fecha"
          categories={["Cantidad vendida"]}
          colors={["blue"]}
          yAxisWidth={48}
        />
      </div>
    </div>
  );
}
