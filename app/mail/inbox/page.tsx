"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MailDisplay } from "../mobile-components/mail-display";
import { mails } from "../data";
import { useMail } from "../use-mail";
import { TooltipProvider } from "@/components/ui/tooltip";

const Mobile = () => {
  const router = useRouter(),
    [mail] = useMail(),
    mediaQueryList = window.matchMedia("(max-width: 900px)"),
    isMobileOrTabletDevice: boolean = mediaQueryList.matches;

  useEffect(() => {
    const showPageOnMobileOrTablet = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        router.back();
      }
    };
    mediaQueryList.addEventListener("change", showPageOnMobileOrTablet);

    return () => {
      mediaQueryList.removeEventListener("change", showPageOnMobileOrTablet);
    };
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
  }
};

export default Mobile;
