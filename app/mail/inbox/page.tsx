"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MailDisplay } from "../mobile-components/mail-display";
import { mails } from "../data";
import { useMail } from "../use-mail";
import { TooltipProvider } from "@/components/ui/tooltip";

const Mobile = () => {
  const router = useRouter();
  const [mail] = useMail();
  const [isMobileOrTabletDevice, setIsMobileOrTabletDevice] =
    useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia("(max-width: 900px)");

      const handleMediaQueryChange = (event: MediaQueryListEvent) => {
        setIsMobileOrTabletDevice(event.matches);
      };

      setIsMobileOrTabletDevice(mediaQueryList.matches);

      mediaQueryList.addEventListener("change", handleMediaQueryChange);

      return () => {
        mediaQueryList.removeEventListener("change", handleMediaQueryChange);
      };
    }
  }, []);

  if (isMobileOrTabletDevice) {
    return (
      <TooltipProvider delayDuration={0}>
        <MailDisplay
          mail={mails.find(item => item.id === mail.selected) || null}
        />
      </TooltipProvider>
    );
  } else {
    router.back();
    return null;
  }
};

export default Mobile;
