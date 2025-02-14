import type { Metadata } from "next";

const RECIPENT_EMAIL = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL;

export const generateMetadata = (): Metadata => {
  return {
    title: `Mail | ${RECIPENT_EMAIL}`,
    description: `Mail section for ${RECIPENT_EMAIL}.`,
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
