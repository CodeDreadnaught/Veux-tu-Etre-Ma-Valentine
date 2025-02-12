import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { recipentName } from "./data";

const AvatarIcon = () => {
  return (
    <Avatar className="size-5">
      <AvatarImage
        className="object-cover size-full"
        src="/avatar.svg"
        alt="Avatar Image"
      />
      <AvatarFallback className="text-xs">
        {recipentName &&
          recipentName
            .split(" ")
            .map(chunk => chunk[0])
            .join("")}
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
