import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({
  //     data: {
  //       email: "sornchaithedev@gmail.com",
  //     },
  //   });

  //   const users = await prisma.user.findMany({
  //     include: {
  //       posts: true,
  //     },
  //   });

  const updateSornchaiTheDev = await prisma.user.update({
    where: {
      email: "sornchaithedev@gmail.com",
    },
    data: {
      name: "SornchaiTheDev",
    },
  });
  console.log(updateSornchaiTheDev);
}

main()
  .then(async (res) => {
    await prisma.$disconnect;
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect;
    process.exit(1);
  });
