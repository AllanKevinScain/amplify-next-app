import { NextResponse } from "next/server";

export async function GET() {
  const request = await fetch(
    "https://harry-potter-api-phi.vercel.app/api/characters",
    {
      method: "GET",
    }
  );

  const responseData = await request.json();

  return NextResponse.json(responseData);
}
