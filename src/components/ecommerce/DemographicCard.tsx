"use client";
import Image from "next/image";

import CountryMap from "./CountryMap";

export default function DemographicCard() {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        Customers demographic last 30 days
                    </h3>
                </div>
            </div>
            <div className="border-gary-200 my-6 overflow-hidden rounded-2xl border bg-gray-50 px-4 py-6 sm:px-6 dark:border-gray-800 dark:bg-gray-900">
                <div
                    id="mapOne"
                    className="mapOne map-btn 2xsm:w-[307px] xsm:w-[358px] -mx-4 -my-6 h-[212px] w-[252px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
                >
                    <CountryMap />
                </div>
            </div>

            <div className="space-y-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                                Melbourne
                            </p>
                            <span className="text-theme-xs block text-gray-500 dark:text-gray-400">
                                1,512 Customers
                            </span>
                        </div>
                    </div>

                    <div className="flex w-full max-w-[140px] items-center gap-3">
                        <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                            <div className="bg-brand-500 absolute top-0 left-0 flex h-full w-[79%] items-center justify-center rounded-sm text-xs font-medium text-white"></div>
                        </div>
                        <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                            40%
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                                Sydney
                            </p>
                            <span className="text-theme-xs block text-gray-500 dark:text-gray-400">
                                1,399 Customers
                            </span>
                        </div>
                    </div>

                    <div className="flex w-full max-w-[140px] items-center gap-3">
                        <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                            <div className="bg-brand-500 absolute top-0 left-0 flex h-full w-[23%] items-center justify-center rounded-sm text-xs font-medium text-white"></div>
                        </div>
                        <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                            37%
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                                Brisbane
                            </p>
                            <span className="text-theme-xs block text-gray-500 dark:text-gray-400">
                                567 Customers
                            </span>
                        </div>
                    </div>

                    <div className="flex w-full max-w-[140px] items-center gap-3">
                        <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                            <div className="bg-brand-500 absolute top-0 left-0 flex h-full w-[23%] items-center justify-center rounded-sm text-xs font-medium text-white"></div>
                        </div>
                        <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                            15%
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                                Adelaide
                            </p>
                            <span className="text-theme-xs block text-gray-500 dark:text-gray-400">
                                226 Customers
                            </span>
                        </div>
                    </div>

                    <div className="flex w-full max-w-[140px] items-center gap-3">
                        <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                            <div className="bg-brand-500 absolute top-0 left-0 flex h-full w-[23%] items-center justify-center rounded-sm text-xs font-medium text-white"></div>
                        </div>
                        <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                            6%
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                                Perth
                            </p>
                            <span className="text-theme-xs block text-gray-500 dark:text-gray-400">
                                75 Customers
                            </span>
                        </div>
                    </div>

                    <div className="flex w-full max-w-[140px] items-center gap-3">
                        <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                            <div className="bg-brand-500 absolute top-0 left-0 flex h-full w-[23%] items-center justify-center rounded-sm text-xs font-medium text-white"></div>
                        </div>
                        <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                            2%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
