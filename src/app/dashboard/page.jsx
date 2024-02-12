import RevenueChart from "@/ui/components/dashboard/RevenueChart";
import { lusitana } from "@/ui/fonts";
import { Suspense } from "react";
import { RevenueChartSkeleton } from "@/ui/components/Skeletons";
export default function DashboardPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div>
        <Suspense fallback={<RevenueChart />}>
          <RevenueChart />
        </Suspense>
      </div>
    </main>
  );
}
