export type UserInfo = {
  name: string;
  email: string;
  secret?: string;
};

export const RECIPIENT_NAME = process.env.RECIPIENT_NAME!;
export const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL!;
export const RECIPIENT_SECRET = process.env.RECIPIENT_SECRET!;

export const recipientObject: UserInfo = {
  name: process.env.NEXT_PUBLIC_ORUKO_AMUTORUNWA!,
  email: process.env.NEXT_PUBLIC_AGBESI_ERO_AYELUJARA!,
};
