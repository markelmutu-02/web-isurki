"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MenuLink } from "@/types/menuLink";

const serviceLinksEN = [
  { title: "IsurLog", href: "/en/isurlog" },
  { title: "Sensorica", href: "/en/sensorica" },
  { title: "IsurDash", href: "/en/isurdash" },
];

export default function NavEN() {
  const pathname = usePathname();
  const isMenuActive = (link: MenuLink) => {
    const currentPath = pathname?.split("/").slice(2).join("/");
    const hrefPath = link.href?.split("/").slice(2).join("/");
    return hrefPath === currentPath;
  };

  const isMenuParentActive = (menu: MenuLink[]) => {
    return menu.some((elm) => isMenuActive(elm));
  };

  return (
    <>
      <li
        className={`menu-item   ${
          pathname === "/en" ? "current-menu-item" : ""
        } `}
      >
        <a href="/en" className="item-link">
          Home{" "}
        </a>
      </li>
      <li
        className={`menu-item menu-item-has-children position-relative   ${
          isMenuParentActive(serviceLinksEN) ? "current-menu-item" : ""
        } `}
      >
        <a href="#" className="item-link">
          Products
        </a>
        <ul className="sub-menu">
          {serviceLinksEN.map((item, index) => (
            <li
              className={`sub-menu-item  ${
                isMenuActive(item) ? "current-item" : ""
              } `}
              key={index}
            >
              <Link href={item.href} className={`item-link-2`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`menu-item    ${
          isMenuActive({ href: "/en/news" }) ? "current-menu-item" : ""
        } `}
      >
        <Link href={`/en/news`} className={`item-link `}>
          News
        </Link>
      </li>
      <li
        className={`menu-item   ${
          isMenuActive({ href: "/en/contact-us" }) ? "current-menu-item" : ""
        } `}
      >
        <Link href={`/en/contact-us`} className={`item-link `}>
          Contact
        </Link>
      </li>
    </>
  );
}
