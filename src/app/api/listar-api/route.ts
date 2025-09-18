import { NextResponse } from "next/server";

export async function GET() {
  const request = await fetch(`${process.env.BASE_API_URL}/api/characters`, {
    method: "GET",
  });

  const responseData = await request.json();

  return NextResponse.json(responseData);
}
