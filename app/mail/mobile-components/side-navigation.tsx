"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "radix-ui";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";
import { Nav } from "./nav";
import { accounts } from "../data";
import { AccountSwitcher } from "./account-switcher";

import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  Menu,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";

const SideNavigation = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  return (
    <Sheet open={showNavigation} onOpenChange={setShowNavigation}>
      <SheetTrigger asChild>
        <Button
          className="text-muted-foreground p-0"
          variant="ghost"
          onClick={() => setShowNavigation(true)}
        >
          <Menu className="text-black" />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-4 pt-4" side="left">
        <VisuallyHidden.Root>
          <SheetHeader>
            <SheetTitle>Mail Navigation Section</SheetTitle>
            <SheetDescription>
              Navigate to mail different sections.
            </SheetDescription>
          </SheetHeader>
        </VisuallyHidden.Root>
        <div className={cn("flex h-[52px]  items-center justify-center")}>
          <AccountSwitcher accounts={accounts} />
        </div>
        <Separator />
        <Nav
          setShowNavigation={setShowNavigation}
          links={[
            {
              title: "Inbox",
              label: "128",
              icon: Inbox,
              variant: "default",
            },
            {
              title: "Drafts",
              label: "9",
              icon: File,
              variant: "ghost",
            },
            {
              title: "Sent",
              label: "",
              icon: Send,
              variant: "ghost",
            },
            {
              title: "Junk",
              label: "23",
              icon: ArchiveX,
              variant: "ghost",
            },
            {
              title: "Trash",
              label: "",
              icon: Trash2,
              variant: "ghost",
            },
            {
              title: "Archive",
              label: "",
              icon: Archive,
              variant: "ghost",
            },
          ]}
        />
        <Separator />
        <Nav
          setShowNavigation={setShowNavigation}
          links={[
            {
              title: "Social",
              label: "972",
              icon: Users2,
              variant: "ghost",
            },
            {
              title: "Updates",
              label: "342",
              icon: AlertCircle,
              variant: "ghost",
            },
            {
              title: "Forums",
              label: "128",
              icon: MessagesSquare,
              variant: "ghost",
            },
            {
              title: "Shopping",
              label: "8",
              icon: ShoppingCart,
              variant: "ghost",
            },
            {
              title: "Promotions",
              label: "21",
              icon: Archive,
              variant: "ghost",
            },
          ]}
        />
      </SheetContent>
    </Sheet>
  );
};

export default SideNavigation;
