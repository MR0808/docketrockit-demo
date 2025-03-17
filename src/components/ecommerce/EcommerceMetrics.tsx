"use client";
import Badge from "../ui/badge/Badge";
import {
    ArrowDownIcon,
    ArrowUpIcon,
    DollarSign,
    GroupIcon
} from "lucide-react";

export const EcommerceMetrics = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
            {/* <!-- Metric Item Start --> */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                    <GroupIcon className="size-6 text-gray-800 dark:text-white/90" />
                </div>

                <div className="mt-5 flex items-end justify-between">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Transactions last 30 days
                        </span>
                        <h4 className="text-title-sm mt-2 font-bold text-gray-800 dark:text-white/90">
                            3,782
                        </h4>
                    </div>
                    <Badge color="success">
                        <ArrowUpIcon />
                        11.01%
                    </Badge>
                </div>
            </div>
            {/* <!-- Metric Item End --> */}

            {/* <!-- Metric Item Start --> */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                    <DollarSign className="text-gray-800 dark:text-white/90" />
                </div>
                <div className="mt-5 flex items-end justify-between">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Transaction total last 30 days
                        </span>
                        <h4 className="text-title-sm mt-2 font-bold text-gray-800 dark:text-white/90">
                            $189,100
                        </h4>
                    </div>

                    <Badge color="error">
                        <ArrowDownIcon className="text-error-500" />
                        2.05%
                    </Badge>
                </div>
            </div>
            {/* <!-- Metric Item End --> */}

            {/* <!-- Metric Item Start --> */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                    <DollarSign className="text-gray-800 dark:text-white/90" />
                </div>
                <div className="mt-5 flex items-end justify-between">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Average transaction value last 30 days
                        </span>
                        <h4 className="text-title-sm mt-2 font-bold text-gray-800 dark:text-white/90">
                            $51.23
                        </h4>
                    </div>

                    <Badge color="success">
                        <ArrowUpIcon />
                        5.05%
                    </Badge>
                </div>
            </div>
            {/* <!-- Metric Item End --> */}
        </div>
    );
};
