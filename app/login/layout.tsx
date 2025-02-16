import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Veux-tu Etre Ma Valentine",
  description:
    "Login to access your profile and all features of Veux-tu Etre Ma Valentine",
  icons: "/login-icon.svg",
  openGraph: {
    images: "/login-icon.svg",
  },
};

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: Readonly<LoginLayoutProps>) => {
  return <>{children}</>;
};

export default LoginLayout;
