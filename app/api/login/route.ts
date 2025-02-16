import { type NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import { serialize } from "cookie";
import { RECIPIENT_EMAIL, RECIPIENT_SECRET } from "../userinfo/userinfo";

interface LoginRequestBody {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const { email, password }: LoginRequestBody = await req.json();

    if (email === RECIPIENT_EMAIL && password === RECIPIENT_SECRET) {
      const token = await new SignJWT({ email })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(new TextEncoder().encode(RECIPIENT_SECRET));

      const response = NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
      response.headers.set(
        "Set-Cookie",
        serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
        })
      );
      return response;
    }
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json(
    { message: "Logout successful" },
    { status: 200 }
  );

  response.headers.set(
    "Set-Cookie",
    serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(0),
    })
  );

  return response;
}
