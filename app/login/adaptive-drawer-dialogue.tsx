import useMediaQuery from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { VisuallyHidden } from "radix-ui";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, PhoneCall, Calendar } from "lucide-react";

import { recipentEmail, recipentName } from "../mail/data";

interface AdaptiveDrawerDialogueProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AdaptiveDrawerDialogue({
  open,
  setOpen,
}: AdaptiveDrawerDialogueProps) {
  const isMobile = useMediaQuery("(max-width: 900px)");

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <VisuallyHidden.Root>
            <Button variant="outline">Edit Profile</Button>
          </VisuallyHidden.Root>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] outline-none border-none">
          <DialogHeader>
            <DialogDescription className="grid place-items-center">
              <ProfileAvatar />
            </DialogDescription>
            <DialogTitle className="text-center">
              <ProfileForm />
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <VisuallyHidden.Root>
          <Button variant="outline">Edit Profile</Button>
        </VisuallyHidden.Root>
      </DrawerTrigger>
      <DrawerContent className="border-none outline-none">
        <DrawerHeader className="text-center grid gap-10">
          <DrawerDescription className="grid place-items-center">
            <ProfileAvatar />
          </DrawerDescription>
          <DrawerTitle>
            <ProfileForm mobile={true} />
          </DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ mobile }: { mobile?: boolean }) {
  return (
    <>
      <span className="block mt-15 text-xl">{recipentName}</span>
      <span className="font-normal text-base block my-2">{recipentEmail}</span>
      <div
        className={`flex items-center mx-auto justify-center gap-5 ${
          mobile && "mb-8"
        } mt-4`}
      >
        <PhoneCall /> <Mail /> <Calendar />
      </div>
    </>
  );
}

function ProfileAvatar() {
  return (
    <Avatar className="size-40">
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
}
