import { NextResponse } from "@/node_modules/next/server";

export function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "milk",
      price: 10,
    },
    {
      id: 2,
      name: "bread",
      price: 100,
    },
  ]);
}
