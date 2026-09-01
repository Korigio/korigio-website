import { NextResponse } from "next/server";
import { getLatestRelease } from "@/lib/releases";

export async function GET() {
  const release = await getLatestRelease();
  return NextResponse.json(release);
}
