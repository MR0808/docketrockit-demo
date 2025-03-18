import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import DemographicCard from "@/components/ecommerce/DemographicCard";

export const metadata: Metadata = {
    title: "DocketRockit | Merchant Admin | Dashboard",
    description: "The DocketRockit Merchant Admin Dashboard"
};

export default function Ecommerce() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 space-y-6">
                <EcommerceMetrics />
            </div>

            <div className="col-span-12 space-y-6 xl:col-span-8">
                <MonthlySalesChart />
                <StatisticsChart />
            </div>

            <div className="col-span-12 xl:col-span-4">
                <DemographicCard />
            </div>

            <div className="col-span-12 xl:col-span-7">
                {/* <RecentOrders /> */}
            </div>
        </div>
    );
}
