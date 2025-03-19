"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
    GridIcon,
    TableProperties,
    UserCircleIcon,
    ChevronDownIcon,
    Ellipsis,
    FileText
} from "lucide-react";

import logo from "../../public/images/logo/logo.png";
import logoWhite from "../../public/images/logo/logo-white.png";
import logoIcon from "../../public/images/logo/logoiconblack.png";
import logoIconWhite from "../../public/images/logo/logoiconwhite.png";

type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
    {
        icon: <GridIcon />,
        name: "Dashboard",
        path: "/"
    },
    {
        icon: <TableProperties />,
        name: "Reports",
        path: "/reports"
    },
    {
        icon: <UserCircleIcon />,
        name: "Users",
        path: "/users"
    },
    {
        name: "Invoices",
        icon: <FileText />,
        path: "/invoices"
    }
];

const AppSidebar: React.FC = () => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const pathname = usePathname();

    const renderMenuItems = (
        navItems: NavItem[],
        menuType: "main" | "others"
    ) => (
        <ul className="flex flex-col gap-4">
            {navItems.map((nav, index) => (
                <li key={nav.name}>
                    {nav.subItems ? (
                        <button
                            onClick={() => handleSubmenuToggle(index, menuType)}
                            className={`menu-item group ${
                                openSubmenu?.type === menuType &&
                                openSubmenu?.index === index
                                    ? "menu-item-active"
                                    : "menu-item-inactive"
                            } cursor-pointer ${
                                !isExpanded && !isHovered
                                    ? "lg:justify-center"
                                    : "lg:justify-start"
                            }`}
                        >
                            <span
                                className={` ${
                                    openSubmenu?.type === menuType &&
                                    openSubmenu?.index === index
                                        ? "menu-item-icon-active"
                                        : "menu-item-icon-inactive"
                                }`}
                            >
                                {nav.icon}
                            </span>
                            {(isExpanded || isHovered || isMobileOpen) && (
                                <span className={`menu-item-text`}>
                                    {nav.name}
                                </span>
                            )}
                            {(isExpanded || isHovered || isMobileOpen) && (
                                <ChevronDownIcon
                                    className={`ml-auto h-5 w-5 transition-transform duration-200 ${
                                        openSubmenu?.type === menuType &&
                                        openSubmenu?.index === index
                                            ? "text-brand-500 rotate-180"
                                            : ""
                                    }`}
                                />
                            )}
                        </button>
                    ) : (
                        nav.path && (
                            <Link
                                href={nav.path}
                                className={`menu-item group ${
                                    isActive(nav.path)
                                        ? "menu-item-active"
                                        : "menu-item-inactive"
                                }`}
                            >
                                <span
                                    className={`${
                                        isActive(nav.path)
                                            ? "menu-item-icon-active"
                                            : "menu-item-icon-inactive"
                                    }`}
                                >
                                    {nav.icon}
                                </span>
                                {(isExpanded || isHovered || isMobileOpen) && (
                                    <span className={`menu-item-text`}>
                                        {nav.name}
                                    </span>
                                )}
                            </Link>
                        )
                    )}
                    {nav.subItems &&
                        (isExpanded || isHovered || isMobileOpen) && (
                            <div
                                ref={(el) => {
                                    subMenuRefs.current[
                                        `${menuType}-${index}`
                                    ] = el;
                                }}
                                className="overflow-hidden transition-all duration-300"
                                style={{
                                    height:
                                        openSubmenu?.type === menuType &&
                                        openSubmenu?.index === index
                                            ? `${subMenuHeight[`${menuType}-${index}`]}px`
                                            : "0px"
                                }}
                            >
                                <ul className="mt-2 ml-9 space-y-1">
                                    {nav.subItems.map((subItem) => (
                                        <li key={subItem.name}>
                                            <Link
                                                href={subItem.path}
                                                className={`menu-dropdown-item ${
                                                    isActive(subItem.path)
                                                        ? "menu-dropdown-item-active"
                                                        : "menu-dropdown-item-inactive"
                                                }`}
                                            >
                                                {subItem.name}
                                                <span className="ml-auto flex items-center gap-1">
                                                    {subItem.new && (
                                                        <span
                                                            className={`ml-auto ${
                                                                isActive(
                                                                    subItem.path
                                                                )
                                                                    ? "menu-dropdown-badge-active"
                                                                    : "menu-dropdown-badge-inactive"
                                                            } menu-dropdown-badge`}
                                                        >
                                                            new
                                                        </span>
                                                    )}
                                                    {subItem.pro && (
                                                        <span
                                                            className={`ml-auto ${
                                                                isActive(
                                                                    subItem.path
                                                                )
                                                                    ? "menu-dropdown-badge-active"
                                                                    : "menu-dropdown-badge-inactive"
                                                            } menu-dropdown-badge`}
                                                        >
                                                            pro
                                                        </span>
                                                    )}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                </li>
            ))}
        </ul>
    );

    const [openSubmenu, setOpenSubmenu] = useState<{
        type: "main" | "others";
        index: number;
    } | null>(null);
    const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
        {}
    );
    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // const isActive = (path: string) => path === pathname;
    const isActive = useCallback(
        (path: string) => path === pathname,
        [pathname]
    );

    useEffect(() => {
        // Check if the current path matches any submenu item
        let submenuMatched = false;
        ["main", "others"].forEach((menuType) => {
            const items = navItems;
            items.forEach((nav, index) => {
                if (nav.subItems) {
                    nav.subItems.forEach((subItem) => {
                        if (isActive(subItem.path)) {
                            setOpenSubmenu({
                                type: menuType as "main" | "others",
                                index
                            });
                            submenuMatched = true;
                        }
                    });
                }
            });
        });

        // If no submenu item matches, close the open submenu
        if (!submenuMatched) {
            setOpenSubmenu(null);
        }
    }, [pathname, isActive]);

    useEffect(() => {
        // Set the height of the submenu items when the submenu is opened
        if (openSubmenu !== null) {
            const key = `${openSubmenu.type}-${openSubmenu.index}`;
            if (subMenuRefs.current[key]) {
                setSubMenuHeight((prevHeights) => ({
                    ...prevHeights,
                    [key]: subMenuRefs.current[key]?.scrollHeight || 0
                }));
            }
        }
    }, [openSubmenu]);

    const handleSubmenuToggle = (
        index: number,
        menuType: "main" | "others"
    ) => {
        setOpenSubmenu((prevOpenSubmenu) => {
            if (
                prevOpenSubmenu &&
                prevOpenSubmenu.type === menuType &&
                prevOpenSubmenu.index === index
            ) {
                return null;
            }
            return { type: menuType, index };
        });
    };
    return (
        <aside
            className={`fixed top-0 left-0 z-50 mt-16 flex h-screen flex-col border-r border-gray-200 bg-white px-5 text-gray-900 transition-all duration-300 ease-in-out lg:mt-0 dark:border-gray-800 dark:bg-gray-900 ${
                isExpanded || isMobileOpen
                    ? "w-[290px]"
                    : isHovered
                      ? "w-[290px]"
                      : "w-[90px]"
            } ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`flex py-8 ${
                    !isExpanded && !isHovered
                        ? "lg:justify-center"
                        : "justify-start"
                }`}
            >
                <Link href="/">
                    {isExpanded || isHovered || isMobileOpen ? (
                        <>
                            <Image
                                className="dark:hidden"
                                src={logo}
                                alt="Logo"
                                width={150}
                                height={40}
                            />
                            <Image
                                className="hidden dark:block"
                                src={logoWhite}
                                alt="Logo"
                                width={150}
                                height={40}
                            />
                        </>
                    ) : (
                        <>
                            <Image
                                src={logoIcon}
                                alt="Logo"
                                width={32}
                                height={32}
                                className="dark:hidden"
                            />
                            <Image
                                src={logoIconWhite}
                                alt="Logo"
                                width={32}
                                height={32}
                                className="hidden dark:block"
                            />
                        </>
                    )}
                </Link>
            </div>
            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <nav className="mb-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2
                                className={`mb-4 flex text-xs leading-[20px] text-gray-400 uppercase ${
                                    !isExpanded && !isHovered
                                        ? "lg:justify-center"
                                        : "justify-start"
                                }`}
                            >
                                {isExpanded || isHovered || isMobileOpen ? (
                                    "Menu"
                                ) : (
                                    <Ellipsis />
                                )}
                            </h2>
                            {renderMenuItems(navItems, "main")}
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default AppSidebar;
