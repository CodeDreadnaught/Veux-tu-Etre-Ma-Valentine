import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Loading = () => {
  return (
    <div className="h-screen grid place-items-center">
      <section className="flex flex-col items-center">
        <Avatar className="size-40 animate-bounce duration-3000">
          <AvatarImage
            className="object-cover size-full"
            src="/logo.svg"
            alt="Logo Animation"
          />
          <AvatarFallback className="font-medium">CDNLKM</AvatarFallback>
        </Avatar>
        <div>Yours Till Eternity Fades...</div>
      </section>
    </div>
  );
};

export default Loading;
