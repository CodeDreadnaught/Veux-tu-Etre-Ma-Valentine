"use client";

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

const RECIPIENT_EMAIL = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL,
  RECIPIENT_SECRET = process.env.NEXT_PUBLIC_RECIPIENT_SECRET;

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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailCharacters = emailRef.current?.value ?? "",
      passwordCharacters = passwordRef.current?.value ?? "",
      email = emailCharacters.trim().toLocaleLowerCase(),
      password = passwordCharacters;

    if (email === RECIPIENT_EMAIL && password === RECIPIENT_SECRET) {
      setOpen(true);

      if (emailRef.current && passwordRef.current) {
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }

      localStorage.setItem("seotiwole", JSON.stringify(true));
      setTimeout(() => setOpen(false), 3500);
      router.push("/mail");
    } else {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: `The login credentials you entered are invalid.`,
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
