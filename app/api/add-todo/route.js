import { connectToDatabase } from "@/app/configs/mongodb"
import {NextResponse} from "next/server"

export async function POST(request) {
  const {db} = await connectToDatabase()
  const myCollection = process.env.TODOS_COLLECTION

  const todo = await request.json()

  const newTodo = {
    todo, completed: false
  }

  const todos = await db.collection(myCollection).insertOne(newTodo)

  return NextResponse.json(todos)
}
