interface MailLayoutProps {
  children: React.ReactNode;
}

const MailLayout = ({ children }: Readonly<MailLayoutProps>) => {
  return <>{children}</>;
};

export default MailLayout;
