import { NextResponse, NextRequest } from "next/server";
import jsonwebtoken from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const { verify } = jsonwebtoken,
    token = request.cookies.get("token")?.value;

  const RECIPIENT_SECRET = process.env.NEXT_PUBLIC_RECIPIENT_SECRET!;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    verify(token, RECIPIENT_SECRET);

    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/mail/*"],
};
