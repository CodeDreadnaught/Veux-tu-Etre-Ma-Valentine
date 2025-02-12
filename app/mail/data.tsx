import AvatarIcon from "./avatar-icon";

export const recipentName = process.env.NEXT_PUBLIC_RECIPIENT_NAME;
export const recipentEmail = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL;

export const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    profileImage: "/olumide.jpg",
    name: "Olumide Akinsoyinu",
    email: "olumideakinsoyinu@gmail.com",
    subject: "Will you be My Valentine?",
    text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
    date: "2025-02-04T17:55:00",
    read: false,
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    profileImage: "/olumide.jpg",
    name: "Olumide Akinsoyinu",
    email: "olumideakinsoyinu@gmail.com",
    subject: "Re: Project Update",
    text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
    date: "2025-02-04T17:55:00",
    read: true,
  },
  {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    profileImage: "/olumide.jpg",
    name: "Olumide Akinsoyinu",
    email: "olumideakinsoyinu@gmail.com",
    subject: "Weekend Plans",
    text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
    date: "2025-02-04T17:55:00",
    read: true,
  },
  {
    id: "61c35085-72d7-42b4-8d62-738f700d4b92",
    profileImage: "/olumide.jpg",
    name: "Olumide Akinsoyinu",
    email: "olumideakinsoyinu@gmail.com",
    subject: "Re: Question about Budget",
    text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
    date: "2025-02-04T17:55:00",
    read: false,
  },
  {
    id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
    profileImage: "/olumide.jpg",
    name: "Olumide Akinsoyinu",
    email: "olumideakinsoyinu@gmail.com",
    subject: "Important Announcement",
    text: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael",
    date: "2025-02-04T17:55:00",
    read: false,
  },
];

export type Mail = (typeof mails)[number];

export const accounts = [
  {
    label: recipentName as string,
    email: recipentEmail as string,
    icon: <AvatarIcon />,
  },
];

export type Account = (typeof accounts)[number];

export const contacts = [
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
  },
  {
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
  },
  {
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
  },
  {
    name: "Noah Martinez",
    email: "noah.martinez@example.com",
  },
  {
    name: "Ava Taylor",
    email: "ava.taylor@example.com",
  },
];

export type Contact = (typeof contacts)[number];
