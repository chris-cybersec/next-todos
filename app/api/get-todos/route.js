import { connectToDatabase } from "@/app/configs/mongodb";

import { NextResponse } from "next/server";

export async function GET() {
  const { db } = await connectToDatabase();
  const myCollection = process.env.TODOS_COLLECTION;

  const todos = await db.collection(myCollection).find().toArray();

  return NextResponse.json(todos);
}
