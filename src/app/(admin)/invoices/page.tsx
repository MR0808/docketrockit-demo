import type { Metadata } from "next";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Search, Printer } from "lucide-react";

export const metadata: Metadata = {
    title: "DocketRockit | Merchant Admin | Invoices",
    description: "The DocketRockit Merchant Admin Dashboard"
};

const ReportsPage = () => {
    return (
        <div>
            <PageBreadcrumb pageTitle="Invoices" />
            <div className="flex h-full flex-col gap-6 sm:gap-5 xl:flex-row">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 xl:w-1/5 dark:border-gray-800 dark:bg-white/[0.03]">
                    <div className="relative mb-5 w-full">
                        <form>
                            <button className="absolute top-1/2 left-4 -translate-y-1/2">
                                <Search className="size-5 text-gray-500 dark:text-gray-400" />
                            </button>
                            <input
                                placeholder="Search Invoice..."
                                className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-3.5 pl-[42px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                                type="text"
                            ></input>
                        </form>
                    </div>
                    <div className="space-y-1">
                        <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-gray-100 p-2 hover:bg-gray-100 dark:bg-white/[0.03] dark:hover:bg-white/[0.03]">
                            <div>
                                <span className="mb-0.5 block text-sm font-medium text-gray-800 dark:text-white/90">
                                    February 2025
                                </span>
                                <span className="text-theme-xs block text-gray-500 dark:text-gray-400">
                                    Invoice: #34823
                                </span>
                            </div>
                        </div>
                        <div className="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/[0.03]">
                            <div>
                                <span className="mb-0.5 block text-sm font-medium text-gray-800 dark:text-white/90">
                                    January 2025
                                </span>
                                <span className="text-theme-xs block text-gray-500 dark:text-gray-400">
                                    ID: #23982
                                </span>
                            </div>
                        </div>
                        <div className="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/[0.03]">
                            <div>
                                <span className="mb-0.5 block text-sm font-medium text-gray-800 dark:text-white/90">
                                    December 2024
                                </span>
                                <span className="text-theme-xs block text-gray-500 dark:text-gray-400">
                                    ID: #18289
                                </span>
                            </div>
                        </div>
                        <div className="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/[0.03]">
                            <div>
                                <span className="mb-0.5 block text-sm font-medium text-gray-800 dark:text-white/90">
                                    November 2024
                                </span>
                                <span className="text-theme-xs block text-gray-500 dark:text-gray-400">
                                    ID: #12982
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white xl:w-4/5 dark:border-gray-800 dark:bg-white/[0.03]">
                    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
                        <h3 className="text-theme-xl font-medium text-gray-800 dark:text-white/90">
                            Invoice
                        </h3>
                        <h4 className="text-base font-medium text-gray-700 dark:text-gray-400">
                            ID : #34823
                        </h4>
                    </div>
                    <div className="p-5 xl:p-8">
                        <div className="mb-9 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    From
                                </span>
                                <h5 className="mb-2 text-base font-semibold text-gray-800 dark:text-white/90">
                                    DocketRockit Pty. Ltd
                                </h5>
                                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                                    500 Collins Street, <br />
                                    Melbourne, Victoria, 3000
                                </p>
                                <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Issued On:
                                </span>
                                <span className="block text-sm text-gray-500 dark:text-gray-400">
                                    1st March, 2025
                                </span>
                            </div>
                            <div className="h-px w-full bg-gray-200 sm:h-[158px] sm:w-px dark:bg-gray-800"></div>
                            <div className="sm:text-right">
                                <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    To
                                </span>
                                <h5 className="mb-2 text-base font-semibold text-gray-800 dark:text-white/90">
                                    Electronics Co.
                                </h5>
                                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                                    355 Shobe Lane <br />
                                    Mulgrave, Victoria, 3170
                                </p>
                                <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Due On:
                                </span>
                                <span className="block text-sm text-gray-500 dark:text-gray-400">
                                    29th March, 2025
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                            <div className="max-w-full overflow-x-auto">
                                <table className="undefined min-w-full">
                                    <thead className="border-b border-gray-100 dark:border-white/[0.05]">
                                        <tr>
                                            <th className="px-5 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-400">
                                                #
                                            </th>
                                            <th className="px-5 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Total Transaction Amount
                                            </th>
                                            <th className="px-5 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Commission
                                            </th>
                                            <th className="px-5 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Total Cost (ex. GST)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                        <tr>
                                            <td className="text-theme-sm px-5 py-3.5 text-left text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                1
                                            </td>
                                            <td className="text-theme-sm px-5 py-3.5 text-left text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                $1,201,485
                                            </td>
                                            <td className="text-theme-sm px-5 py-3.5 text-left text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                0.2%
                                            </td>
                                            <td className="text-theme-sm px-5 py-3.5 text-left text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                $2,402.97
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="my-6 border-b border-gray-100 pb-6 text-right dark:border-gray-800">
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                Sub Total amount: $2,402.97
                            </p>
                            <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                                GST (10%): $240.98
                            </p>
                            <p className="text-lg font-semibold text-gray-800 dark:text-white/90">
                                Total : $2,643.26
                            </p>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <button className="shadow-theme-xs flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                                Proceed to payment
                            </button>
                            <button className="bg-brand-500 shadow-theme-xs hover:bg-brand-600 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white">
                                <Printer className="size-5" />
                                Print
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ReportsPage;
