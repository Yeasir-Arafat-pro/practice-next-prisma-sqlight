import { _GetData, handleAddUser } from "@/app/prisma-db";
import { User } from "@/types/userType";
import { errorResponse, successResponse } from "@/utils/responseController";
import { NextRequest } from "next/server";


export async function GET(){
  const users = await _GetData('user')
  
  if (!users || users.length === 0) {
    return errorResponse({
      status: 404,
      message: "No users found"
    })
  }

  return successResponse({
    status: 200,
    message: "Users fetched successfully",
    payload: users
  })
}

export async function POST(req: NextRequest){
  const body = await req.json()
  const {name, email}: User = body

  const user = await handleAddUser( name, email )

  if (!user) {
    return errorResponse({
      status: 500,
      message: "Failed to create user"
    })
  }

  return successResponse({
    status: 201,
    message: "User created successfully",
    payload: {}
  })
}