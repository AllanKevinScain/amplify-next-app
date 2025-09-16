import { Providers } from "@/providers";
import { Suspense } from "react";

export default function TanstackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center gap-[14px] h-screen">
          <span className="text-[50px] animate-spin">+</span>
          <span className="text-[16px]">Carregando tanstack</span>
        </div>
      }
    >
      <Providers>{children}</Providers>
    </Suspense>
  );
}
