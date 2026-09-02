"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternatePath } from "@/data/localePaths";

export default function LanguageDropdown({
  current = "ES",
}: {
  current?: "ES" | "EN";
}) {
  const pathname = usePathname() || "/";
  const esHref = getAlternatePath(pathname, "es");
  const enHref = getAlternatePath(pathname, "en");

  return (
    <div className="tf-dropdown-sort tf-language">
      <div className="btn-select" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="text-sort-value label">{current}</span>
        <i className="icon-Arrow-Down" />
      </div>
      <div className="dropdown-menu">
        <Link href={esHref} className="select-item">
          <span className="text-value-item">ES</span>
        </Link>
        <Link href={enHref} className="select-item">
          <span className="text-value-item">EN</span>
        </Link>
      </div>
    </div>
  );
}
