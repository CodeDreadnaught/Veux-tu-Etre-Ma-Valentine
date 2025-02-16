import type { Metadata } from "next";
import { RECIPIENT_EMAIL } from "../api/userinfo/userinfo";

export const generateMetadata = (): Metadata => {
  return {
    title: `Mail | ${RECIPIENT_EMAIL}`,
    description: `Mail section for ${RECIPIENT_EMAIL}.`,
    icons: "/mail-icon.svg",
  };
};

interface MailLayoutProps {
  children: React.ReactNode;
}

const MailLayout = ({ children }: Readonly<MailLayoutProps>) => {
  return <>{children}</>;
};

export default MailLayout;
