import { NextRequest, NextResponse } from "@/node_modules/next/server";
import schema from "./schema";

export function GET() {
  return NextResponse.json({
    id: 1,
    name: "rams",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json({ id: 4, ...body }, { status: 201 });
}
