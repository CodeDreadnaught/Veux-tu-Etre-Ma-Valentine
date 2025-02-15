import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  const isMobileOrTablet =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    );

  if (request.nextUrl.pathname === "/mail/inbox") {
    if (!isMobileOrTablet) {
      return NextResponse.redirect(new URL("/mail", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/mail/inbox"],
};
