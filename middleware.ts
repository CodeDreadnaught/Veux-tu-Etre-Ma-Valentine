import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { RECIPIENT_SECRET } from "./app/api/userinfo/userinfo";

async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get("token")?.value;

  if (!token || !RECIPIENT_SECRET) return false;

  try {
    await jwtVerify(token, new TextEncoder().encode(RECIPIENT_SECRET));
    return true;
  } catch (error) {
    console.error("Token verification failed:", error);
    return false;
  }
}

function isMobileOrTablet(userAgent: string): boolean {
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    userAgent
  );
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/mail")) {
    const authenticated = await isAuthenticated(request);
    if (!authenticated) {
      console.log("Authentication failed, redirecting to /login");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (pathname === "/mail/inbox") {
      const userAgent = request.headers.get("user-agent") || "";
      if (!isMobileOrTablet(userAgent)) {
        return NextResponse.redirect(new URL("/mail", request.url));
      }
    }
  }

  if (pathname.startsWith("/login")) {
    const authenticated = await isAuthenticated(request);
    if (authenticated) {
      console.log("You are already signed in, redirecting to /mail");
      return NextResponse.redirect(new URL("/mail", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/mail/:path*", "/login"],
};
