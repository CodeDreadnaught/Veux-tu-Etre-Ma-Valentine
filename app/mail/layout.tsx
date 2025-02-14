"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

interface MailLayoutProps {
  children: React.ReactNode;
}

const MailLayout = ({ children }: Readonly<MailLayoutProps>) => {
  useEffect(() => {
    const seotiwole = JSON.parse(localStorage.getItem("seotiwole")!) || null;

    if (!seotiwole) {
      redirect("/login");
    }
  }, []);

  return <>{children}</>;
};

export default MailLayout;
