import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params; // await লাগবে
  const data = getPhotoById(id);

  if (!data) {
    return NextResponse.json({ error: "Photo not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}
