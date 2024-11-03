"use client"; // because use want use usePathname for change style of active page

import Link from "next/link";
import { usePathname } from "next/navigation";

export const TopNavigation: React.FC = () => {
  const menuItems: NavigationMenuItem[] = [
    { title: "صفحه اصلی", href: "/" },
    { title: "دوره‌های ری‌اکت و نکست", href: "/courses" },
    { title: "مطالب و مقالات", href: "/blog" }, 
  ];

  const pathname = usePathname();

  return (
    <ul className="flex gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={`navigation-${item.href}`}>
            <Link
              href={item.href}
              className={`hover:text-primary transition-colors pb-2 ${
                isActive &&
                "border-b-2 dark:text-primary  dark:border-primary/30"
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};