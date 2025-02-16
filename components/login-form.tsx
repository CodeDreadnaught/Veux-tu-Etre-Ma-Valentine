"use client";

import type React from "react";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function LoginForm({
  className,
  setOpen,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { toast } = useToast(),
    router = useRouter(),
    emailRef = useRef<HTMLInputElement | null>(null),
    passwordRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailCharacters = emailRef.current?.value ?? "",
      passwordCharacters = passwordRef.current?.value ?? "",
      email = emailCharacters.trim().toLowerCase(),
      password = passwordCharacters;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setOpen(true);

        if (emailRef.current && passwordRef.current) {
          emailRef.current.value = "";
          passwordRef.current.value = "";
        }

        router.prefetch("/mail");
        setTimeout(() => setOpen(false), 4000);
      } else {
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: `The login credentials you entered are invalid.`,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred during login. Please try again.",
      });
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome Back</CardTitle>
          <CardDescription>Enter your login credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
