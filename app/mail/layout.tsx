"use client";
import { redirect } from "next/navigation";

interface MailLayoutProps {
  children: React.ReactNode;
}

const MailLayout = ({ children }: Readonly<MailLayoutProps>) => {
  const seotiwole = JSON.parse(localStorage.getItem("seotiwole")!) || null;

  if (!seotiwole) {
    redirect("/login");
  } else {
    return <>{children}</>;
  }
};

export default MailLayout;
