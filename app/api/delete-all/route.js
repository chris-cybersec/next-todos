import {NextResponse} from "next/server"
import { connectToDatabase } from "@/app/configs/mongodb"

export async function DELETE(request) {
  const {db} = await connectToDatabase()
  const myCollection = process.env.TODOS_COLLECTION

  const filter = {completed: false}
  
  const deleteAll = await db.collection(myCollection).deleteMany(filter)

  return NextResponse.json(deleteAll)
}
