"use client";
import Link from "next/link";
import React from "react";
import { serviceLinks } from "@/data/menu";
import { usePathname } from "next/navigation";
import { MenuLink } from "@/types/menuLink";

export default function Nav() {
  const pathname = usePathname();
  const isMenuActive = (link: MenuLink) => {
    const currentPath = pathname?.split("/")[1];
    const hrefPath = link.href?.split("/")[1];
    const onePagePath = link.onePage?.split("/")[1];

    return hrefPath === currentPath || onePagePath === currentPath;
  };

  const isMenuParentActive = (menu: MenuLink[]) => {
    return menu.some((elm) => isMenuActive(elm));
  };

  return (
    <>
      <li
        className={`menu-item   ${
          isMenuActive({ href: "/" }) ? "current-menu-item" : ""
        } `}
      >
        <a href="/" className="item-link">
          Inicio{" "}
        </a>
      </li>
      <li
        className={`menu-item menu-item-has-children position-relative   ${
          isMenuParentActive(serviceLinks) ? "current-menu-item" : ""
        } `}
      >
        <a href="#" className="item-link">
          Productos
        </a>
        <ul className="sub-menu">
          {serviceLinks.map((item, index) => (
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
          isMenuActive({ href: "/noticias" }) ? "current-menu-item" : ""
        } `}
      >
        <Link href={`/noticias`} className={`item-link `}>
          Noticias
        </Link>
      </li>
      <li
        className={`menu-item   ${
          isMenuActive({ href: "/contact-us" }) ? "current-menu-item" : ""
        } `}
      >
        <Link href={`/contact-us`} className={`item-link `}>
          Contacto
        </Link>
      </li>
    </>
  );
}
