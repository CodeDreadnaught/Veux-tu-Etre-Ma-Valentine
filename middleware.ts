import { NextResponse, type NextRequest } from "next/server";
import jsonwebtoken from "jsonwebtoken";

function isAuthenticated(request: NextRequest): boolean {
  const { verify } = jsonwebtoken;
  const token = request.cookies.get("token")?.value;
  const RECIPIENT_SECRET = process.env.NEXT_PUBLIC_RECIPIENT_SECRET!;

  if (!token) return false;

  try {
    verify(token, RECIPIENT_SECRET);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function isMobileOrTablet(userAgent: string): boolean {
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    userAgent
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Authentication middleware for /mail/* routes
  if (pathname.startsWith("/mail")) {
    if (!isAuthenticated(request)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Device check middleware for /mail/inbox
    if (pathname === "/mail/inbox") {
      const userAgent = request.headers.get("user-agent") || "";
      if (!isMobileOrTablet(userAgent)) {
        return NextResponse.redirect(new URL("/mail", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/mail/:path*"],
};
