import { PrismaClient } from "@/generated/prisma";

const prisma  =  new PrismaClient()

export const addUsers = async () => {
  const productCount = await prisma.user.count()
  if (productCount == 0) {
     await prisma.user.createMany({
    data: [
      {name: 'fake', email: 'fake@gmail.com'},
      {name: 'fake2', email: 'fake2@gmail.com'},
      {name: 'fake3', email: 'fake3@gmail.com'},
    ]
  })
  }
}

addUsers()

export const _GetData = async (modelName: keyof typeof prisma) => {
  // modelName must be a valid key of prisma
  const model = prisma[modelName as keyof typeof prisma] as any;
  return await model.findMany();
};

export const handleGetUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: {id}
  })
}

export const handleAddUser = async (name: string, email: string) => {
  console.log(name);
  console.log(email);
  
  return await prisma.user.create({
    data: {name, email}
  })
}

export const handleDeleteUserById = async (id: number) => {
  return await prisma.user.delete({
    where: {id}
  })
}

export const handleUpdateUserById = async (id: number, name: string, email: string) => {
  return await prisma.user.update({
    where: {id},
    data: {name, email}
  })
}