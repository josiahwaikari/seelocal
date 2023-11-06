import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return {};
    }

    // check if email already exists
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this email already exists.",
        },
        { status: 409 }
      );
    }

    // create a new user
    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        user: {
          id: newUser.id,
          email: newUser.email,
          createdAt: newUser.createdAt,
        },
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    // @ts-ignore
    console.log(error?.message);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
