import type { Metadata } from "next";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import InvoicesComponent from "./InvoicesComponent";

export const metadata: Metadata = {
    title: "DocketRockit | Merchant Admin | Invoices",
    description: "The DocketRockit Merchant Admin Dashboard"
};

const ReportsPage = () => {
    return (
        <div>
            <PageBreadcrumb pageTitle="Invoices" />
            <InvoicesComponent />
        </div>
    );
};
export default ReportsPage;
