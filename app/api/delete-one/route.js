import {NextResponse} from "next/server"
import { connectToDatabase } from "@/app/configs/mongodb"
import { ObjectId } from "mongodb"

export async function DELETE(request) {
  const {db} = await connectToDatabase()
  const myCollection = process.env.TODOS_COLLECTION

const id = await request.json()

  const filter = {_id: new ObjectId(id)}

  const deleted = await db.collection(myCollection).deleteOne(filter)

  return NextResponse.json(deleted)
}
