"use client";

import { MailDisplay } from "../mobile-components/mail-display";
import { mails } from "../data";
import { useMail } from "../use-mail";
import { TooltipProvider } from "@/components/ui/tooltip";

const Mobile = () => {
  const [mail] = useMail();

  return (
    <TooltipProvider delayDuration={0}>
      <MailDisplay
        mail={mails.find(item => item.id === mail.selected) || null}
      />
    </TooltipProvider>
  );
};
export default Mobile;
