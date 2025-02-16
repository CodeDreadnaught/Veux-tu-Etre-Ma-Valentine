import { cookies } from "next/headers";
import { MobileMail } from "@/app/mail/mobile-components/mail";
import { Mail } from "@/app/mail/desktop-components/mail";
import { accounts, mails } from "@/app/mail/data";

export default async function MailPage() {
  const cookiesHeader = await cookies();
  const layout = cookiesHeader.get("react-resizable-panels:layout:mail");
  const collapsed = cookiesHeader.get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <>
      <div className="hidden lg:block">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
      <div className="lg:hidden">
        <MobileMail mails={mails} />
      </div>
    </>
  );
}
