"use client";

import { HOME_PAGES_OPTIONS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const LateralNav = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  function handleMenu() {
    setOpen((s) => !s);
  }

  return (
    <div className="flex gap-[14px]">
      <section
        className={
          open
            ? "h-screen w-full max-w-[80vw] bg-neutral-700 p-[14px] pt-[5%] relative"
            : "h-screen w-full max-w-[50px] bg-neutral-700 relative lg:max-w-[400px] lg:p-[14px] lg:pt-[2%]"
        }
      >
        <button
          onClick={handleMenu}
          className={
            open
              ? "absolute top-0 right-[10px] cursor-pointer"
              : "absolute top-0 right-[10px] cursor-pointer lg:hidden"
          }
        >
          {open ? "Fechar" : "Abrir"}
        </button>

        <div
          className={
            open
              ? "flex flex-col gap-[14px]"
              : "relative -left-[50px] flex flex-col gap-[14px] lg:left-[0]"
          }
        >
          {HOME_PAGES_OPTIONS.map((pages) => {
            return (
              <Link
                key={pages.name}
                href={pages.url}
                className={
                  path !== pages.url
                    ? "bg-neutral-400 p-[12px] rounded-xl overflow-hidden"
                    : "bg-green-400 p-[12px] rounded-xl overflow-hidden cursor-not-allowed pointer-events-none"
                }
              >
                {pages.name}
              </Link>
            );
          })}
        </div>
      </section>
      <div className="w-full max-h-screen overflow-auto">{children}</div>
    </div>
  );
};
