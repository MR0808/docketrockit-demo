"use client";

import Image from "next/image";

export default function UserMetaCard() {
    return (
        <>
            <div className="rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800">
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                    <div className="flex w-full flex-col items-center gap-6 xl:flex-row">
                        <div className="h-20 w-20 overflow-hidden rounded-full border border-gray-200 dark:border-gray-800">
                            <Image
                                width={80}
                                height={80}
                                src="/images/user/owner.jpg"
                                alt="user"
                            />
                        </div>
                        <div className="order-3 xl:order-2">
                            <h4 className="mb-2 text-center text-lg font-semibold text-gray-800 xl:text-left dark:text-white/90">
                                Michael Chowdhury
                            </h4>
                            <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Team Manager
                                </p>
                                <div className="hidden h-3.5 w-px bg-gray-300 xl:block dark:bg-gray-700"></div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Melbourne, Australia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
