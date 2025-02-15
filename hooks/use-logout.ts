"use client";

import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export function useLogout() {
  const router = useRouter();
  const { toast } = useToast();

  const logout = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/login");
        router.refresh();
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        variant: "destructive",
        title: "Logout Error",
        description: "An error occurred during logout. Please try again.",
      });
    }
  };

  return logout;
}
