import { NextRequest, NextResponse } from "next/server";
import jsonwebtoken from "jsonwebtoken";
import cookie from "cookie";

const RECIPIENT_EMAIL = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL;
const RECIPIENT_SECRET = process.env.NEXT_PUBLIC_RECIPIENT_SECRET;

interface LoginRequestBody {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const { email, password }: LoginRequestBody = await req.json();

    if (email === RECIPIENT_EMAIL && password === RECIPIENT_SECRET) {
      const token = jsonwebtoken.sign({ email }, RECIPIENT_SECRET);

      const response = NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
      response.headers.set(
        "Set-Cookie",
        cookie.serialize("token", token, {
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
    console.log(error);

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
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(0),
    })
  );

  return response;
}
