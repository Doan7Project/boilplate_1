"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { axiosClient } from "@/src/infrastructure/http/axios-client";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axiosClient.get("/auth/me"); // verify token
        setChecking(false);
      } catch {
        router.push("/login");
      }
    };

    checkAuth();
  }, []);

  if (checking) return <div>Loading...</div>;

  return <>{children}</>;
}