"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AdminNav } from "@/components/AdminNav";
import { supabase } from "@/lib/supabase";

export function AdminGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function check() {
      const isAuthRoute = pathname === "/login" || pathname === "/admin/login";
      if (isAuthRoute) {
        // Don't run admin guard on the login route itself
        setStatus("ok");
        return;
      }
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace("/admin/login");
        return;
      }
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("user_id", session.user.id)
        .single();
      if (!profile || profile.role !== "admin") {
        await supabase.auth.signOut();
        setStatus("denied");
        return;
      }
      setStatus("ok");
    }
    check();
  }, [router, pathname]);

  const isAuthRoute = pathname === "/login" || pathname === "/admin/login";
  if (isAuthRoute) {
    // Render login page without admin shell
    return <>{children}</>;
  }

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-stone-500">Loading…</p>
      </div>
    );
  }

  if (status === "denied") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-600">Access denied. This account is not an admin.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 shrink-0 border-r border-stone-200 bg-white py-6 px-4 sticky top-0 self-start h-screen">
        <AdminNav />
      </aside>
      <div className="min-w-0 flex-1 flex justify-center py-6 px-6">
        <div className="w-full max-w-4xl">{children}</div>
      </div>
    </div>
  );
}
