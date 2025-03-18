import Image from "next/image";
import type { Metadata } from "next";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { SlidersHorizontal, Download } from "lucide-react";

export const metadata: Metadata = {
    title: "DocketRockit | Merchant Admin | Reports | MacBook Pro 13”",
    description: "The DocketRockit Merchant Admin Dashboard"
};

interface Order {
    id: number; // Unique identifier for each product
    date: string; // Product name
    price: string; // Price of the product (as a string with currency symbol)
    channel: string;
    location: string; // URL or path to the product image
}

const tableData: Order[] = [
    {
        id: 1,
        price: "$2399.00",
        channel: "In-store",
        date: "23/02/2025",
        location: "Chadstone"
    },
    {
        id: 2,
        price: "$2199.00",
        channel: "In-store",
        date: "20/02/2025",
        location: "Chadstone"
    },
    {
        id: 3,
        price: "$2399.00",
        channel: "In-store",
        date: "18/02/2025",
        location: "Frankston"
    },
    {
        id: 4,
        price: "$2399.00",
        channel: "In-store",
        date: "16/02/2025",
        location: "Moorabbin"
    },
    {
        id: 5,
        price: "$2199.00",
        channel: "Online",
        date: "23/01/2025",
        location: "Website"
    }
];

const ProductPage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row space-x-3">
                <Image
                    width={200}
                    height={200}
                    src="/images/product/product-01.jpg"
                    className="h-[200px] w-[200px]"
                    alt="MacBook Pro 13”"
                />
                <div className="flex flex-col">
                    <div className="text-3xl">MacBook Pro 13”</div>
                    <div className="text-3xl">$2,399</div>
                    <div className="text-2xl">Laptop</div>
                </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pt-4 pb-3 sm:px-6 dark:border-gray-800 dark:bg-white/[0.03]">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                            Recent Orders
                        </h3>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                            <SlidersHorizontal className="size-5 fill-white stroke-current dark:fill-gray-800" />
                            Filter
                        </button>
                        <button className="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                            <Download className="size-5 fill-white stroke-current dark:fill-gray-800" />
                            Download
                        </button>
                    </div>
                </div>
                <div className="max-w-full overflow-x-auto">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-y border-gray-100 dark:border-gray-800">
                            <TableRow>
                                <TableCell
                                    isHeader
                                    className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                                >
                                    Date
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                                >
                                    Price
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                                >
                                    Channel
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                                >
                                    Location
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}

                        <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {tableData.map((order) => (
                                <TableRow key={order.id} className="">
                                    <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                                        {order.date}
                                    </TableCell>
                                    <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                                        {order.price}
                                    </TableCell>
                                    <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                                        {order.channel}
                                    </TableCell>
                                    <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                                        {order.location}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};
export default ProductPage;
