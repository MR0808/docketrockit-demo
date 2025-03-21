import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import Badge from "@/components/ui/badge/Badge";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SlidersHorizontal, Download } from "lucide-react";

export const metadata: Metadata = {
    title: "DocketRockit | Merchant Admin | Reports",
    description: "The DocketRockit Merchant Admin Dashboard"
};

// Define the TypeScript interface for the table rows
interface Product {
    id: number; // Unique identifier for each product
    name: string; // Product name
    variants: string; // Number of variants (e.g., "1 Variant", "2 Variants")
    category: string; // Category of the product
    price: string; // Price of the product (as a string with currency symbol)
    channel: string;
    // status: string; // Status of the product
    image: string; // URL or path to the product image
    status: "Delivered" | "Pending" | "Canceled"; // Status of the product
}

const tableData: Product[] = [
    {
        id: 1,
        name: "MacBook Pro 13”",
        variants: "2 Variants",
        category: "Laptop",
        price: "$2399.00",
        status: "Delivered",
        channel: "In-store",
        image: "/images/product/product-01.jpg" // Replace with actual image URL
    },
    {
        id: 2,
        name: "Apple Watch Ultra",
        variants: "1 Variant",
        category: "Watch",
        price: "$879.00",
        status: "Pending",
        channel: "In-store",
        image: "/images/product/product-02.jpg" // Replace with actual image URL
    },
    {
        id: 3,
        name: "iPhone 15 Pro Max",
        variants: "2 Variants",
        category: "SmartPhone",
        price: "$1869.00",
        status: "Delivered",
        channel: "In-store",
        image: "/images/product/product-03.jpg" // Replace with actual image URL
    },
    {
        id: 4,
        name: "iPad Pro 3rd Gen",
        variants: "2 Variants",
        category: "Electronics",
        price: "$1699.00",
        status: "Canceled",
        channel: "Online",
        image: "/images/product/product-04.jpg" // Replace with actual image URL
    },
    {
        id: 5,
        name: "AirPods Pro 2nd Gen",
        variants: "1 Variant",
        category: "Accessories",
        price: "$240.00",
        status: "Delivered",
        channel: "Online",
        image: "/images/product/product-05.jpg" // Replace with actual image URL
    }
];

const ReportsPage = () => {
    return (
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
                                Products
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
                                Category
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
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHeader>

                    {/* Table Body */}

                    <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {tableData.map((product) => (
                            <TableRow key={product.id} className="">
                                <TableCell className="py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                                            <Image
                                                width={50}
                                                height={50}
                                                src={product.image}
                                                className="h-[50px] w-[50px]"
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <Link
                                                href="/reports/macbook"
                                                className="text-theme-sm font-medium text-gray-800 hover:underline dark:text-white/90"
                                            >
                                                {product.name}
                                            </Link>
                                            <span className="text-theme-xs text-gray-500 dark:text-gray-400">
                                                {product.variants}
                                            </span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                                    {product.price}
                                </TableCell>
                                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                                    {product.category}
                                </TableCell>
                                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                                    {product.channel}
                                </TableCell>
                                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                                    <Badge
                                        size="sm"
                                        color={
                                            product.status === "Delivered"
                                                ? "success"
                                                : product.status === "Pending"
                                                  ? "warning"
                                                  : "error"
                                        }
                                    >
                                        {product.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};
export default ReportsPage;
