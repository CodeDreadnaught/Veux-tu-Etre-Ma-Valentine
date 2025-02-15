import type { Metadata } from "next";
import { RECIPIENT_EMAIL } from "@/app/api/userinfo/userinfo";

export const generateMetadata = (): Metadata => {
  return {
    title: `Mail | ${RECIPIENT_EMAIL}`,
    description: `Mail section for ${RECIPIENT_EMAIL}.`,
    icons: "/mail-icon.svg",
  };
};

interface InboxLayoutProps {
  children: React.ReactNode;
}

const InboxLayout = ({ children }: Readonly<InboxLayoutProps>) => {
  return <>{children}</>;
};

export default InboxLayout;
