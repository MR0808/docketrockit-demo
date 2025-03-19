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
import { SlidersHorizontal, Download, PlusCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "DocketRockit | Merchant Admin | Users",
    description: "The DocketRockit Merchant Admin Dashboard"
};

interface User {
    id: number;
    user: {
        image: string;
        name: string;
        role: string;
    };
    access: string;
    status: string;
    lastLogin: string;
}

// Define the table data using the interface
const tableData: User[] = [
    {
        id: 1,
        user: {
            image: "/images/user/user-17.jpg",
            name: "Lindsey Curtis",
            role: "Web Designer"
        },
        status: "Active",
        access: "Admin",
        lastLogin: "2 days ago"
    },
    {
        id: 2,
        user: {
            image: "/images/user/user-18.jpg",
            name: "Kaiya George",
            role: "Project Manager"
        },
        access: "User",
        lastLogin: "Never",
        status: "Pending"
    },
    {
        id: 3,
        user: {
            image: "/images/user/user-17.jpg",
            name: "Zain Geidt",
            role: "Accounts Payable"
        },
        access: "User",
        lastLogin: "1 day ago",
        status: "Active"
    },
    {
        id: 4,
        user: {
            image: "/images/user/user-20.jpg",
            name: "Abram Schleifer",
            role: "Account Manager"
        },
        access: "User",
        lastLogin: "3 days ago",
        status: "Cancel"
    },
    {
        id: 5,
        user: {
            image: "/images/user/user-21.jpg",
            name: "Carla George",
            role: "Front-end Developer"
        },
        access: "User",
        lastLogin: "7 days ago",
        status: "Active"
    }
];

const UsersPage = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pt-4 pb-3 sm:px-6 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        Users
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
                    <button className="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                        <PlusCircle className="size-5 fill-white stroke-current dark:fill-gray-800" />
                        Add User
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
                                User
                            </TableCell>
                            <TableCell
                                isHeader
                                className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                            >
                                Access
                            </TableCell>
                            <TableCell
                                isHeader
                                className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                            >
                                Last Login
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
                        {tableData.map((user) => (
                            <TableRow key={user.id} className="">
                                <TableCell className="px-5 py-4 text-start sm:px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 overflow-hidden rounded-full">
                                            <Image
                                                width={40}
                                                height={40}
                                                src={user.user.image}
                                                alt={user.user.name}
                                            />
                                        </div>
                                        <div>
                                            <Link href="/users/profile/">
                                                <span className="text-theme-sm block font-medium text-gray-800 hover:underline dark:text-white/90">
                                                    {user.user.name}
                                                </span>
                                            </Link>
                                            <span className="text-theme-xs block text-gray-500 dark:text-gray-400">
                                                {user.user.role}
                                            </span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                                    {user.access}
                                </TableCell>
                                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                                    {user.lastLogin}
                                </TableCell>
                                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                                    <Badge
                                        size="sm"
                                        color={
                                            user.status === "Delivered"
                                                ? "success"
                                                : user.status === "Pending"
                                                  ? "warning"
                                                  : "error"
                                        }
                                    >
                                        {user.status}
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
export default UsersPage;
