import emailjs from "emailjs-com";

const USER_PUBLIC_SECRET = process.env.NEXT_PUBLIC_USER_PUBLIC_SECRET || "",
  SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || "",
  TEMPLATEID = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";

export type EmailJSResponseStatus = {
  status: number;
  text: string;
};

const sendEmail = async (responseData: Record<string, unknown>) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATEID,
      responseData,
      USER_PUBLIC_SECRET
    );
    return response;
  } catch (error) {
    return error;
  }
};

export default sendEmail;
