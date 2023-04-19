import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // craete
  //   await prisma.user.create({
  //     data: {
  //       email: "sornchai.som@ku.th",
  //       nickName: "Chokun",
  //       posts: {
  //         create: {
  //           title: "First Post!",
  //           content: "this is my first ever prisma posts",
  //           published: true,
  //         },
  //       },
  //     },
  //   });

  // read
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  // update
  //   const updateUser = await prisma.user.update({
  //     where: {
  //       email: "sornchaithedev@gmail.com",
  //     },
  //     data: {
  //       age: 19,
  //     },
  //   });
  // await prisma.user.create({
  //   data: {
  //     email: "test@gmail.com",
  //   },
  // });

  // delete
  //   const deleteUser = await prisma.user.delete({
  //     where: {
  //       email: "test@gmail.com",
  //     },
  //   });

  // delete Many
  const deleteIfAgeIsLessthanFive = await prisma.user.deleteMany({
    where: {
      age: 5,
    },
  });
  console.log(deleteIfAgeIsLessthanFive);
  console.dir(users, { depth: null });
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
