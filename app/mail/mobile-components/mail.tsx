"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MailList } from "@/app/mail/mobile-components/mail-list";
import { type Mail } from "@/app/mail/data";
import SideNavigation from "./side-navigation";
import { recipentName } from "@/app/mail/data";

interface MailProps {
  mails: Mail[];
}

export function MobileMail({ mails }: MailProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tabs defaultValue="all">
        <div className="flex items-center px-4 py-2">
          <h1 className="text-xl font-bold">Inbox</h1>
          <TabsList className="ml-auto">
            <TabsTrigger
              value="all"
              className="text-zinc-600 dark:text-zinc-200"
            >
              All mail
            </TabsTrigger>
            <TabsTrigger
              value="unread"
              className="text-zinc-600 dark:text-zinc-200"
            >
              Unread
            </TabsTrigger>
          </TabsList>
        </div>
        <Separator />
        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form>
            <div className="flex items-center gap-2 rounded-lg p-2 border border-input shadow-sm h-10">
              <div className="flex items-center gap-1 flex-grow">
                <SideNavigation />
                <Input
                  className="px-1 focus-visible:ring-0 focus-visible:border-none border-none shadow-none"
                  placeholder="Search in mail"
                />
              </div>
              <Avatar className="size-7">
                <AvatarImage
                  className="object-cover size-full"
                  src="/avatar.svg"
                  alt="Avatar Image"
                />
                <AvatarFallback>
                  {recipentName &&
                    recipentName
                      .split(" ")
                      .map(chunk => chunk[0])
                      .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </form>
        </div>
        <TabsContent value="all" className="m-0">
          <MailList items={mails} />
        </TabsContent>
        <TabsContent value="unread" className="m-0">
          <MailList items={mails.filter(item => !item.read)} />
        </TabsContent>
      </Tabs>
    </TooltipProvider>
  );
}
